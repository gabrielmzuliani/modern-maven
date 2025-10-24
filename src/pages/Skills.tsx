import { LayoutDashboard, Database, Zap, Lightbulb, Brain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const capabilities = [
  {
    icon: LayoutDashboard,
    title: "Dashboard",
    description:
      "Desenvolvimento de dashboards interativos, dinâmicos e orientados a resultados, transformando dados em insights de valor real.",
  },
  {
    icon: Database,
    title: "Banco de dados",
    description:
      "Manipulação de bancos de dados com foco em processos ETL (extração, transformação e carga) eficientes e escaláveis.",
  },
  {
    icon: Zap,
    title: "Performance",
    description:
      "Otimização de fluxos e processos para maximizar desempenho, reduzir gargalos e aumentar a eficiência operacional.",
  },
  {
    icon: Lightbulb,
    title: "Soluções Criativas",
    description:
      "Criação de soluções personalizadas e inovadoras que atendem às necessidades específicas de cada projeto.",
  },
  {
    icon: Brain,
    title: "Pensamento Analítico",
    description:
      "Aplicação de raciocínio lógico e pensamento analítico na construção de soluções que entregam resultados concretos e mensuráveis.",
  },
];

const technologies = [
  { name: "Power BI", level: "Avançado", percentage: 85, color: "bg-primary" },
  { name: "Excel", level: "Avançado", percentage: 85, color: "bg-primary" },
  { name: "SQL", level: "Intermediário", percentage: 65, color: "bg-orange-500" },
  { name: "VBA", level: "Intermediário", percentage: 60, color: "bg-orange-500" },
  { name: "Python", level: "Básico", percentage: 40, color: "bg-gray-400" },
];

const Skills = () => {
  return (
    <div className="container mx-auto px-6 py-16 max-w-7xl">
      {/* Capacidades Section */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-text-primary mb-4">Capacidades</h1>
          <p className="text-text-secondary text-lg">
            Minhas principais competências e áreas de atuação
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <Card
                key={index}
                className="border-border hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary">
                    {capability.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {capability.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Tecnologias Section */}
      <div>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-text-primary mb-4">Tecnologias</h2>
          <p className="text-text-secondary text-lg">
            Ferramentas e linguagens que domino
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {technologies.map((tech, index) => (
            <div key={index} className="space-y-3">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-text-primary">{tech.name}</h3>
                <span className="text-sm font-medium text-text-secondary">{tech.level}</span>
              </div>
              <div className="space-y-2">
                <Progress value={tech.percentage} className="h-3" />
                <p className="text-xs text-text-muted text-right">{tech.percentage}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
