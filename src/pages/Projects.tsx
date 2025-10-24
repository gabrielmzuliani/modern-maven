import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Projeto 1",
    description:
      "Descrição detalhada do primeiro projeto, incluindo as tecnologias utilizadas e os resultados alcançados.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
    link: "#",
  },
  {
    id: 2,
    title: "Projeto 2",
    description:
      "Descrição detalhada do segundo projeto, destacando os desafios enfrentados e as soluções implementadas.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    link: "#",
  },
  {
    id: 3,
    title: "Projeto 3",
    description:
      "Descrição detalhada do terceiro projeto, mostrando o impacto gerado e os insights obtidos.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=400&fit=crop",
    link: "#",
  },
];

const Projects = () => {
  return (
    <div className="container mx-auto px-6 py-16 max-w-7xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-text-primary mb-4">Projetos</h1>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          Explore alguns dos meus trabalhos mais recentes e descubra como transformo dados em
          soluções práticas
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="overflow-hidden border-border hover:shadow-lg transition-all duration-300 group"
          >
            <CardHeader className="p-0">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                {project.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {project.description}
              </p>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Button
                variant="outline"
                className="w-full group/btn"
                onClick={() => window.open(project.link, "_blank")}
              >
                Ver Projeto
                <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
