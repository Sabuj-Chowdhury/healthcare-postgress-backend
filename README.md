# Healthcare Backend API

A robust backend system for healthcare management built with Node.js and PostgreSQL. This API enables patients to book appointments, process payments, manage prescriptions, and receive AI-powered health suggestions.

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [API Documentation](#api-documentation)
- [Database Schema](#database-schema)
- [Architecture](#architecture)
- [References](#references)
- [Contributing](#contributing)
- [License](#license)

## 🏥 Project Overview

This backend service powers a healthcare platform where patients can:

- Book and manage appointments with healthcare providers
- Process secure payments
- Access and manage prescriptions
- Receive AI-driven health suggestions
- Manage their health profiles and medical history

## 🛠 Tech Stack

| Category       | Technology                |
| -------------- | ------------------------- |
| Runtime        | Node.js                   |
| Framework      | Express.js                |
| Database       | PostgreSQL                |
| ORM            | Prisma / Sequelize        |
| Authentication | JWT (JSON Web Tokens)     |
| Payment        | Stripe / Razorpay         |
| AI Integration | OpenAI / Custom ML Models |
| Testing        | Jest / Mocha              |
| Documentation  | Swagger / OpenAPI         |

## 📁 Project Structure

```
backend/
├── src/
│   ├── config/          # Configuration files (DB, env, etc.)
│   ├── controllers/     # Request handlers
│   ├── middleware/      # Custom middleware (auth, validation, error handling)
│   ├── models/          # Database models
│   ├── routes/          # API route definitions
│   ├── services/        # Business logic layer
│   ├── utils/           # Helper functions and utilities
│   ├── validators/      # Input validation schemas
│   └── index.js         # Application entry point
├── prisma/              # Prisma schema and migrations (if using Prisma)
├── tests/               # Test files
├── .env.example         # Example environment variables
├── .gitignore
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18.x
- PostgreSQL >= 14.x
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Sabuj-Chowdhury/healthcare-postgress-backend.git
   cd healthcare-postgress-backend/backend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Set up the database**

   ```bash
   # Run migrations (if using Prisma)
   npx prisma migrate dev

   # Or run SQL migrations manually
   ```

5. **Start the development server**

   ```bash
   npm run dev
   ```

6. **Start production server**
   ```bash
   npm start
   ```

### Available Scripts

| Command              | Description                              |
| -------------------- | ---------------------------------------- |
| `npm run dev`        | Start development server with hot reload |
| `npm start`          | Start production server                  |
| `npm test`           | Run test suite                           |
| `npm run lint`       | Run ESLint                               |
| `npm run format`     | Format code with Prettier                |
| `npm run db:migrate` | Run database migrations                  |
| `npm run db:seed`    | Seed database with sample data           |

## 🔐 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Server
PORT=3000
NODE_ENV=development

# Database
DATABASE_URL=postgresql://user:password@localhost:5432/healthcare_db

# JWT
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRES_IN=7d
JWT_REFRESH_SECRET=your-refresh-token-secret
JWT_REFRESH_EXPIRES_IN=30d

# Payment Gateway (Stripe example)
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# AI Service (OpenAI example)
OPENAI_API_KEY=sk-...

# Email Service (optional)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:3000
```

## 📚 API Documentation

API documentation is available via Swagger UI at `/api-docs` when running in development mode.

### Base URL

```
Development: http://localhost:3000/api/v1
Production:  https://api.yourdomain.com/api/v1
```

### Core Endpoints

#### Authentication

| Method | Endpoint                | Description            |
| ------ | ----------------------- | ---------------------- |
| POST   | `/auth/register`        | Register new user      |
| POST   | `/auth/login`           | User login             |
| POST   | `/auth/refresh`         | Refresh access token   |
| POST   | `/auth/logout`          | User logout            |
| POST   | `/auth/forgot-password` | Request password reset |
| POST   | `/auth/reset-password`  | Reset password         |

#### Appointments

| Method | Endpoint                               | Description               |
| ------ | -------------------------------------- | ------------------------- |
| GET    | `/appointments`                        | List user appointments    |
| POST   | `/appointments`                        | Book new appointment      |
| GET    | `/appointments/:id`                    | Get appointment details   |
| PUT    | `/appointments/:id`                    | Update appointment        |
| DELETE | `/appointments/:id`                    | Cancel appointment        |
| GET    | `/appointments/availability/:doctorId` | Check doctor availability |

#### Payments

| Method | Endpoint               | Description           |
| ------ | ---------------------- | --------------------- |
| POST   | `/payments/intent`     | Create payment intent |
| POST   | `/payments/confirm`    | Confirm payment       |
| GET    | `/payments/history`    | Payment history       |
| POST   | `/payments/refund/:id` | Request refund        |

#### Prescriptions

| Method | Endpoint             | Description                  |
| ------ | -------------------- | ---------------------------- |
| GET    | `/prescriptions`     | List prescriptions           |
| POST   | `/prescriptions`     | Create prescription (doctor) |
| GET    | `/prescriptions/:id` | Get prescription details     |
| PUT    | `/prescriptions/:id` | Update prescription          |

#### AI Suggestions

| Method | Endpoint            | Description              |
| ------ | ------------------- | ------------------------ |
| POST   | `/ai/suggest`       | Get health suggestions   |
| POST   | `/ai/symptom-check` | Symptom analysis         |
| GET    | `/ai/health-tips`   | Personalized health tips |

## 🗄 Database Schema

The database follows a relational model designed for healthcare data management. See the [ER Diagram](#references) for the complete schema.

### Key Entities

- **Users** - Patients, Doctors, Admins
- **Appointments** - Booking, scheduling, status tracking
- **Payments** - Transactions, refunds, payment methods
- **Prescriptions** - Medications, dosages, instructions
- **Medical Records** - History, diagnoses, lab results
- **Doctors** - Profiles, specializations, schedules
- **Clinics/Hospitals** - Locations, departments
- **AI Interactions** - Suggestion logs, symptom checks

## 🏗 Architecture

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Client    │────▶│  API Gateway │────▶│  Auth Layer  │
└─────────────┘     └─────────────┘     └─────────────┘
                           │
                    ┌──────┴──────┐
                    ▼             ▼
             ┌───────────┐  ┌───────────┐
             │  Routes   │  │Middleware │
             └───────────┘  └───────────┘
                    │
                    ▼
             ┌───────────┐
             │Controllers│
             └───────────┘
                    │
                    ▼
             ┌───────────┐
             │ Services  │
             └───────────┘
                    │
          ┌─────────┼─────────┐
          ▼         ▼         ▼
    ┌─────────┐ ┌─────────┐ ┌─────────┐
    │  Model  │ │  Model  │ │  Model  │
    └─────────┘ └─────────┘ └─────────┘
          │         │         │
          └─────────┼─────────┘
                    ▼
             ┌───────────┐
             │ PostgreSQL│
             └───────────┘
```

### Design Principles

- **Layered Architecture** - Separation of concerns (Routes → Controllers → Services → Models)
- **Dependency Injection** - Loose coupling between components
- **Error Handling** - Centralized error handling with custom error classes
- **Validation** - Input validation at route level using Joi/Zod
- **Security** - Helmet, CORS, Rate limiting, Input sanitization
- **Logging** - Structured logging with Winston/Pino

## 🔗 References

| Document                 | Link                                                                                                                                         | Description                                      |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| **Project Requirements** | [Notion Document](https://find-saminravi99.notion.site/PH-HealthCare-Backend-Project-Requirements-Document-2f7c48b8ac8c80d1a3c0c9f0dca631d7) | Complete project requirements and specifications |
| **ER Diagram**           | [Google Drive](https://drive.google.com/file/d/114TgHqCKexwxputkVNKlYjJXRn_X4u-T/view?usp=sharing)                                           | Entity Relationship Diagram for database schema  |
| **Architecture Diagram** | [Excalidraw](https://excalidraw.com/#json=A4GhmCmfR2AEeEzgNoM0m,FEEGMXbnMKU41flqqiRVfw)                                                      | System architecture and flow diagrams            |

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style Guidelines

- Follow the existing code style (ESLint + Prettier configured)
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For questions and support, please open an issue on [GitHub Issues](https://github.com/Sabuj-Chowdhury/healthcare-postgress-backend/issues).

---

**Repository**: [https://github.com/Sabuj-Chowdhury/healthcare-postgress-backend](https://github.com/Sabuj-Chowdhury/healthcare-postgress-backend)
