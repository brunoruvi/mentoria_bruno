import http from 'k6/http';
import { check, sleep } from 'k6';
import { Trend, Rate, Counter } from 'k6/metrics';

// Métricas customizadas
const errorRate = new Rate('error_rate');
const requestDuration = new Trend('request_duration');
const totalRequests = new Counter('total_requests');

export const options = {
  // Simula crescimento gradual de carga até sobrecarregar
  stages: [
    { duration: '10s', target: 50   },  // aquecimento
    { duration: '15s', target: 200  },  // carga moderada
    { duration: '20s', target: 500  },  // carga alta
    { duration: '20s', target: 1000 },  // pico: 1000 usuários simultâneos
    { duration: '20s', target: 2000 },  // sobrecarga
    { duration: '10s', target: 0    },  // resfriamento
  ],
  thresholds: {
    http_req_duration: ['p(95)<500', 'p(99)<1000'], // garante que p(99) seja calculado
    error_rate: ['rate<0.1'],
  },
};

const BASE_URL = 'http://localhost:3000';

export default function () {
  const res = http.get(`${BASE_URL}/api/products`);

  // Registra métricas
  requestDuration.add(res.timings.duration);
  totalRequests.add(1);

  const success = check(res, {
    'status 200': (r) => r.status === 200,
    'response < 500ms': (r) => r.timings.duration < 500,
    'tem produtos': (r) => {
      try {
        const body = JSON.parse(r.body);
        return Array.isArray(body) && body.length > 0;
      } catch {
        return false;
      }
    },
  });

  errorRate.add(!success);

  sleep(0.01); // 10ms entre requisições — pressão máxima por usuário virtual
}

export function handleSummary(data) {
  const duration = data.metrics.http_req_duration;
  const reqs = data.metrics.http_reqs;

  console.log('\n========== RESUMO DO TESTE ==========');
  const fmt = (v) => (v != null ? v.toFixed(2) : 'N/A');

  console.log(`Total de requisições : ${reqs.values.count}`);
  console.log(`Req/s (média)        : ${fmt(reqs.values.rate)}`);
  console.log(`Tempo médio          : ${fmt(duration.values.med)}ms`);
  console.log(`Percentil 95         : ${fmt(duration.values['p(95)'])}ms`);
  console.log(`Percentil 99         : ${fmt(duration.values['p(99)'])}ms`);
  console.log(`Tempo máximo         : ${fmt(duration.values.max)}ms`);
  console.log(`Taxa de erro         : ${fmt((data.metrics.error_rate?.values.rate ?? 0) * 100)}%`);
  console.log('=====================================\n');

  return {};
}
