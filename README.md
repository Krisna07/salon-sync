# SalonSync - Appointment Booking Application

SalonSync is an intuitive, modern appointment booking application designed to connect clients with beauty service providers such as hairdressers, beauticians, and more. Built with Next.js, Supabase, and Prisma, SalonSync streamlines the booking process with features for browsing businesses, viewing services, checking availability, and managing appointments.

## Features

- **Business Discovery:** Search and filter businesses by location, service type, and availability.
- **Detailed Business Profiles:** View business details, including service lists, pricing, photos, and client reviews.
- **Real-time Availability:** Book appointments based on employee availability.
- **Appointment Management:** Manage upcoming and past appointments, including rescheduling and cancellations.
- **User Authentication:** Secure login/signup for user accounts.
- **Guest Booking:** Clients can book appointments without creating an account (limited functionality).
- **Reviews and Ratings:** Clients can leave feedback and rate businesses.
- **Employee Management (for Businesses):** Businesses can manage employees and their schedules.
- **Service Management (for Businesses):** Businesses can manage the services they offer.

## Technologies Used

- **Next.js:** A React framework for server-side rendering, static site generation, and API routes.
- **Supabase:** An open-source Firebase alternative providing a PostgreSQL database, authentication, and storage.
- **Prisma:** Type-safe ORM for simplified database access.
- **PostgreSQL:** A powerful, open-source relational database system.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
- **Date-fns:** A modern JavaScript date utility library.
- **React Icons:** Easy inclusion of popular icons into React projects.

## License

This project is licensed under the MIT License.

## Getting Started

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **Package Manager:** npm, Yarn, or pnpm
- **Supabase Account:** You'll need a Supabase account to access database and authentication services.

### Installation

1. Clone the repository:
   ```bash
   git clone [Your Repository URL]
   ```

2. Navigate to the project directory:
   ```bash
   cd salon-sync
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Configuration

Create a `.env` file in the root directory with the following environment variables:
```env
DATABASE_URL=your_supabase_database_url
SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Usage

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Access the application by navigating to `http://localhost:3000` in your browser.

### API Endpoints

- **GET /api/[model]:** Retrieve records for the specified model.
- **POST /api/[model]:** Create a new record for the specified model.
- **PUT /api/[model]:** Update an existing record for the specified model.
- **DELETE /api/[model]:** Delete a record for the specified model.

Replace `[model]` with one of the following:
- User
- Business
- Employee
- Service
- TimeSlot
- Appointment
- Review

For more detailed information, please refer to the project's documentation. 
