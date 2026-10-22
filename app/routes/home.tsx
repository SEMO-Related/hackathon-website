import Welcome from "~/welcome/welcome";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "SEMO Hackathon 2026" },
    { name: "description", content: "Get information about the SEMO Hackathon 2026" },
  ];
}

export default function Home() {
  return <Welcome />;
}
