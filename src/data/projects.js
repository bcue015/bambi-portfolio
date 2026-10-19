import Saassaid from "../images/said/saas-said.png"
import Atc from "../images/atc/admin.png"
import FivePints from "../images/fivepints/fivepints.png"

// Add a new project by adding an object here — the grid lays itself out.
export const webProjects = [
  {
    title: "SAAS - Inventory System",
    category: "SaaS",
    image: Saassaid,
    description:
      "A fully functional, cloud-based SaaS Inventory System designed to streamline inventory management for businesses of all sizes. The system supports real-time stock tracking, supplier and product management, user role control (admin, employee, client), and automated workflows—ensuring accuracy, efficiency, and scalability. Built with a secure and user-friendly interface, it enables businesses to manage their inventory anytime, anywhere.",
  },
  {
    title: "Booking System",
    category: "Web App",
    image: Atc,
    description:
      "A standalone booking platform designed to simplify service scheduling. It allows clients to book appointments seamlessly, while businesses can manage availability, automate confirmations, and track bookings efficiently—all in one centralized system.",
  },
  {
    title: "Project Management System",
    category: "Web App",
    image: FivePints,
    // TODO: replace with the real project description
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
]

// `description` is optional — the card shows it with "Read more", like the web projects.
export const ghlVideos = [
  {
    title: "GHL - Workflow 1",
    youtubeId: "DJOrAcReP9g",
    // TODO: add a summary of what this workflow does
    description: "",
  },
  { title: "GHL - Workflow 2", youtubeId: "A9K5hOWXztw" },
]
