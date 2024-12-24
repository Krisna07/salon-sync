SalonSync - Appointment Booking Application
SalonSync is a modern and intuitive appointment booking application designed to seamlessly connect clients with beauty service providers like hairdressers, beauticians, and more. Built with Next.js, Supabase, and Prisma, SalonSync offers a streamlined booking experience with features for browsing businesses, viewing service details, checking availability, and managing appointments.

Features
Business Discovery: Search and filter businesses by location, service type, and availability.
Detailed Business Profiles: View comprehensive business profiles including service lists, pricing, photos, and client reviews.
Real-time Availability: Check employee availability and book appointments in real-time.
Appointment Management: Manage upcoming and past appointments, including rescheduling and cancellations.
User Authentication: Secure user accounts with login/signup functionality.
Guest Booking: Allow clients to book appointments without creating an account (with limited functionality).
Reviews and Ratings: Enable clients to leave reviews and ratings for businesses.
Employee Management (for Businesses): Businesses can manage their employees and their schedules.
Service Management (for Businesses): Businesses can add, edit, and remove the services they offer.

Technologies Used
Next.js: React framework for server-side rendering, static site generation, and API routes.
Supabase: Open-source Firebase alternative providing a PostgreSQL database, authentication, storage, and edge functions.
Prisma: ORM for type-safe and intuitive database access.
PostgreSQL: A powerful, open-source relational database system.
Tailwind CSS: A utility-first CSS framework for rapid UI development.
Date-fns: Modern JavaScript date utility library.
React Icons: Include popular icons in your React projects easily.

License
This project is licensed under the MIT License.

Getting Started
Prerequisites
Node.js (v18 or higher recommended)
npm, Yarn, or pnpm
Supabase account
Installation
Clone the repository:

bash
Copy code
git clone [Your Repository URL]
Navigate to the project directory:

bash
Copy code
cd salon-sync
Install the dependencies:

bash
Copy code
npm install
Configuration
Create a .env file in the root directory and add the following environment variables:

env
Copy code
DATABASE_URL=your_supabase_database_url
SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
Replace the placeholders with your actual Supabase credentials.

Usage
Start the development server:

bash
Copy code
npm run dev
Open your browser and navigate to http://localhost:3000 to access the application.

API Endpoints
GET /api/[model]: Retrieve a list of records for the specified model.
POST /api/[model]: Create a new record for the specified model.
PUT /api/[model]: Update an existing record for the specified model.
DELETE /api/[model]: Delete a record for the specified model.
Replace [model] with one of the following: User, Business, Employee, Service, TimeSlot, Appointment, Review.
