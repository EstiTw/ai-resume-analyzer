import ResumeCard from "~/components/ResumeCard";
import Navbar from "~/components/Navbar";
import { resumes } from "../../constants";
import type { Route } from "./+types/home";
import { useEffect } from "react";
import { usePuterStore } from "~/lib/puter";
import { useLocation, useNavigate } from "react-router";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart fidback for your dream job!" },
  ];
}

export default function Home() {
  const { auth: { isAuthenticated } } = usePuterStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/auth?next=/');

    }

  }, [isAuthenticated])
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />
      <section className="main-section">
        <div className="pade-heading">
          <h1>Track you application & Resume Rating</h1>
          <h2>Review you submissions and check AI-powered feadback</h2>

        </div>
        {resumes.length > 0 && (
          <div className="resumes-section">
            {resumes.map((resume) => (<ResumeCard key={resume.id} resume={resume} />))}
          </div>
        )}
      </section>
    </main>
  );
}
