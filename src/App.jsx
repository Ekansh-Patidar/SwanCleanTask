import { useState } from "react";
import "./App.css";
import PrimaryButton from "./components/PrimaryButton";
import Card from "./components/Card";
import Modal from "./components/Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [summary, setSummary] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    setSummary({
      name: data.name,
      email: data.email,
      plan: data.plan,
      pickup: data.pickup,
      notes: data.notes || "None",
      consent: data.consent ? "Yes" : "No",
    });
    setIsModalOpen(true);
  };

  return (
    <div className="page">
      <header className="hero">
        <span className="badge">Swan Clean</span>
        <h1>Fresh laundry pickup, scheduled in minutes.</h1>
        <p className="hero-text">
          A simple request flow using reusable UI components.
        </p>
        <div className="hero-actions">
          <PrimaryButton size="lg" onClick={() => setIsModalOpen(true)}>
            Preview confirmation
          </PrimaryButton>
        </div>
      </header>

      <main className="layout">
        <Card
          title="Schedule a pickup"
          eyebrow="New request"
          footer={<span>Pickup windows start at 7:00 AM.</span>}
        >
          <form className="form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="name">Full name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Jordan Lee"
                required
              />
            </div>
            <div className="field">
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="jordan@swanmail.com"
                required
              />
            </div>
            <div className="field">
              <label htmlFor="plan">Service plan</label>
              <select id="plan" name="plan" defaultValue="Standard">
                <option>Standard</option>
                <option>Express</option>
                <option>Family Care</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="pickup">Pickup window</label>
              <input
                id="pickup"
                name="pickup"
                type="text"
                placeholder="Tomorrow, 9:00 - 11:00 AM"
                required
              />
            </div>
            <div className="field">
              <label htmlFor="notes">Special instructions</label>
              <textarea
                id="notes"
                name="notes"
                placeholder="Gate code, delivery preference, fabric notes..."
                rows="3"
              ></textarea>
            </div>
            <label className="checkbox">
              <input type="checkbox" name="consent" />
              <span>Text me when the driver is en route.</span>
            </label>
            <PrimaryButton type="submit">Request pickup</PrimaryButton>
          </form>
        </Card>

        <Card title="Why Swan Clean" eyebrow="Service highlights">
          <ul className="feature-list">
            <li>
              <strong>48-hour turnaround</strong>
              <span>Most orders ready the next day.</span>
            </li>
            <li>
              <strong>Real-time tracking</strong>
              <span>Follow each step from pickup to delivery.</span>
            </li>
            <li>
              <strong>Fabric-first care</strong>
              <span>Special handling for delicates and linens.</span>
            </li>
          </ul>
          <div className="stats">
            <div>
              <p className="stat-value">4.9/5</p>
              <p className="stat-label">Avg. rating</p>
            </div>
            <div>
              <p className="stat-value">2k+</p>
              <p className="stat-label">Weekly pickups</p>
            </div>
          </div>
        </Card>
      </main>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Pickup request received"
      >
        <p>
          Thanks for choosing Swan Clean. We are reviewing your request and will
          confirm the pickup window shortly.
        </p>
        {summary && (
          <div className="summary">
            <div>
              <span>Name</span>
              <strong>{summary.name}</strong>
            </div>
            <div>
              <span>Email</span>
              <strong>{summary.email}</strong>
            </div>
            <div>
              <span>Plan</span>
              <strong>{summary.plan}</strong>
            </div>
            <div>
              <span>Pickup</span>
              <strong>{summary.pickup}</strong>
            </div>
            <div>
              <span>Notes</span>
              <strong>{summary.notes}</strong>
            </div>
            <div>
              <span>Text updates</span>
              <strong>{summary.consent}</strong>
            </div>
          </div>
        )}
        <PrimaryButton onClick={() => setIsModalOpen(false)}>
          Done
        </PrimaryButton>
      </Modal>
    </div>
  );
}

export default App;
