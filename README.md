AI Impact Reporting Generator (Module 3)

An AI-powered sustainability impact reporting system that calculates and presents real-time environmental impact metrics for products, such as plastic saved, carbon emissions avoided, and sourcing impact.

This module is designed as a standalone system, separate from Module 1, and can be integrated into e-commerce, ESG dashboards, or sustainability reporting platforms.

🚀 Features

📊 Real-time sustainability impact calculation

♻️ Plastic waste reduction estimation

🌍 Carbon emission avoidance metrics

📍 Local vs standard sourcing insights

🧠 AI-style logic layer (service-based architecture)

🎨 Clean, user-friendly web dashboard

🗄️ Database-driven (MySQL)

🧩 How This Module Is Different from Module 1
Module 1	Module 3
Product auto-category & tagging	Sustainability impact reporting
Text-based AI classification	Numerical + narrative impact analysis
SEO & product metadata	ESG & environmental metrics
Input: product name & description	Input: product ID

This separation ensures clean architecture and scalability.

🗂️ Project Structure
AI Impact Reporting Generator/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── impactController.js
│
├── routes/
│   └── impactRoutes.js
│
├── services/
│   └── impactService.js
│
├── public/
│   └── index.html
│
├── database.sql
├── server.js
├── package.json
├── .env.example
└── README.md
⚙️ Tech Stack

Backend: Node.js, Express.js

Database: MySQL

Frontend: HTML, CSS, Vanilla JavaScript

Architecture: MVC + Service Layer

Environment Config: dotenv

🛠️ Setup Instructions
1️⃣ Clone the Repository
git clone https://github.com/JatinDuttt/AI-impact-reporting-generator.git
cd AI-impact-reporting-generator
2️⃣ Install Dependencies
npm install
3️⃣ Database Setup

Open database.sql

Create the database and tables in MySQL

Insert sample impact data (provided in the SQL file)

4️⃣ Configure Environment Variables

Create a .env file:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=ai_impact
PORT=4000
5️⃣ Start the Server
npm start

Server will run at:

http://localhost:4000
🌐 Web Dashboard

Open in browser:

http://localhost:4000
How it works:

Enter a Product ID

Click Generate Impact

View sustainability impact summary:

Plastic saved

Carbon avoided

Sourcing type

Human-readable impact statement

🧠 Example Impact Output

“By choosing this product, approximately 500g of plastic waste and 375g of carbon emissions were avoided.”

This makes sustainability easy to understand for non-technical users.

🎯 Use Cases

E-commerce sustainability dashboards

ESG & compliance reporting tools

Green product labeling

Corporate sustainability analytics

Investor & stakeholder reporting

🔮 Future Enhancements

Confidence score for impact accuracy

Animated UI transitions

Historical impact tracking

ML-based impact prediction models

Exportable sustainability reports (PDF)

👨‍💻 Author

Jatin
AI & Backend Developer
Focused on building practical, production-ready AI systems.

📝 License

This project is for educational and demonstration purposes.