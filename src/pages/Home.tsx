import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import profileImage from "@/assets/profile.jpeg";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-6 py-20 max-w-7xl">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div className="flex-shrink-0">
          <div className="relative">
            <div className="w-80 h-96 rounded-3xl overflow-hidden shadow-lg">
              <img
                src={profileImage}
                alt="Analista de Dados"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            Analista de Dados
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold text-text-primary">
              Transformando
              <br />
              <span className="text-primary">Dados em Decisões</span>
            </h1>

            <p className="text-lg text-text-secondary max-w-2xl leading-relaxed">
              Entusiasta da resolução de problemas, atuo como um facilitador entre os dados e as
              decisões, traduzindo números em insights claros e acionáveis. Estou constantemente
              explorando novas abordagens, ferramentas e tecnologias para tornar minhas análises
              cada vez mais precisas, ágeis e impactantes.
            </p>
          </div>

          <div className="flex gap-4">
            <Button
              size="lg"
              className="px-8"
              onClick={() => navigate("/projects")}
            >
              Ver Projetos
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8"
              onClick={() => navigate("/contact")}
            >
              Contato
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
