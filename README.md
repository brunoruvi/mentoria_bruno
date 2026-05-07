# Mentoria Desenvolvimento - Product CRUD API

API REST para gerenciamento de produtos usando Express.js e MySQL.

## 🚀 Começando

### Pré-requisitos
- Node.js instalado
- Docker e Docker Compose instalados

### Instalação

1. **Instale as dependências:**
```bash
npm install
```

2. **Inicie o banco de dados com Docker:**
```bash
docker-compose up -d
```

Este comando irá:
- Iniciar um contêiner MySQL
- Iniciar o phpMyAdmin (acessível em http://localhost:8080)
- Criar o banco de dados `mentoria_db`
- Executar o script `init.sql` para criar a tabela de produtos

3. **Inicie o servidor:**
```bash
npm start
```

O servidor rodará em `http://localhost:3000`

## 📝 API Endpoints

### Produtos

#### Listar todos os produtos
```
GET /api/products
```

#### Buscar produto por ID
```
GET /api/products/:id
```

#### Criar novo produto
```
POST /api/products
Content-Type: application/json

{
  "name": "Nome do Produto",
  "description": "Descrição",
  "price": 100.00,
  "quantity": 10
}
```

#### Atualizar produto
```
PUT /api/products/:id
Content-Type: application/json

{
  "name": "Nome Atualizado",
  "description": "Descrição atualizada",
  "price": 150.00,
  "quantity": 15
}
```

#### Deletar produto
```
DELETE /api/products/:id
```

## 🧪 Testando com cURL

```bash
# Listar todos os produtos
curl http://localhost:3000/api/products

# Buscar um produto
curl http://localhost:3000/api/products/1

# Criar um novo produto
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -d '{"name":"Notebook","description":"Notebook XYZ","price":2500.00,"quantity":5}'

# Atualizar um produto
curl -X PUT http://localhost:3000/api/products/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"Notebook Updated","description":"Updated","price":2800.00,"quantity":3}'

# Deletar um produto
curl -X DELETE http://localhost:3000/api/products/1
```

## 🛠️ Estrutura do Projeto

```
.
├── db.js                          # Configuração MySQL
├── server.js                      # Servidor Express
├── package.json                   # Dependências
├── docker-compose.yml             # Docker config
├── init.sql/
│   └── 01_init.sql               # Schema do banco
├── controllers/
│   └── productController.js       # CRUD logic
├── routes/
│   └── productRoutes.js           # API routes
└── README.md
```

## 🐳 Gerenciamento do Docker

```bash
# Iniciar containers
docker-compose up -d

# Parar containers
docker-compose down

# Logs
docker-compose logs -f

# phpMyAdmin: http://localhost:8080
```

Repositório para os materiais da mentoria.
