import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import {
  Sparkles,
  LayoutDashboard,
  Database,
  Zap,
  Lightbulb,
  Brain,
  Mail,
  Linkedin,
  Github,
  MessageSquare,
  Send,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import profileImage from "@/assets/profile.jpeg";

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
  { name: "Power BI", level: "Avançado", percentage: 80, color: "bg-primary" },
  { name: "Excel", level: "Avançado", percentage: 80, color: "bg-primary" },
  { name: "SQL", level: "Intermediário", percentage: 60, color: "bg-orange-500" },
  { name: "VBA", level: "Intermediário", percentage: 60, color: "bg-orange-500" },
  { name: "Python", level: "Básico", percentage: 30, color: "bg-gray-400" },
];

const projects = [
  {
    id: 1,
    title: "Mapeamento de Colaboradores",
    description:
      "Projeto desenvolvido para proporcionar uma visão estratégica e dinâmica sobre os colaboradores de uma empresa, com foco em transformar dados de RH em insights acionáveis e apoiar a tomada de decisão.",
    image: "src/assets/RH.png",
    link: "https://app.powerbi.com/view?r=eyJrIjoiMjk1ZDhkM2YtYWEzOS00OWE5LWJlMmQtN2EzMmVlODU2NmRjIiwidCI6IjY1OWNlMmI4LTA3MTQtNDE5OC04YzM4LWRjOWI2MGFhYmI1NyJ9",
  },
  {
    id: 2,
    title: "Dashboard de Vendas",
    description:
      "Projeto desenvolvido para analisar as principais métricas de venda da empresa, identificar oportunidades e sazonalidades e apoiar na estruturação de estratégias fundamentadas em dados.",
    image: "modern-maven/src/assets/Vendas.png",
    link: "https://app.powerbi.com/view?r=eyJrIjoiOGU5YzM3ZDUtMTAzNC00NjQ5LTk5ZTYtY2FmOWMyMjA3MTUzIiwidCI6IjY1OWNlMmI4LTA3MTQtNDE5OC04YzM4LWRjOWI2MGFhYmI1NyJ9",
  },
  {
    id: 3,
    title: "Demonstrativo de Resultados",
    description:
      "Projeto desenvolvido com foco na criação de um dashboard em Power BI para o monitoramento eficaz e eficiente das principais métricas financeiras da empresa.",
    image: "src/assets/DRE.png",
    link: "https://app.powerbi.com/view?r=eyJrIjoiNWVkNmQwYTctY2M5Zi00ZjZlLWJlZjYtMzI5YWExYWNhNTFmIiwidCI6IjY1OWNlMmI4LTA3MTQtNDE5OC04YzM4LWRjOWI2MGFhYmI1NyJ9",
  },
];

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    toast({
      title: "Mensagem enviada!",
      description: "Obrigado pelo contato. Responderei em breve.",
    });

    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between max-w-7xl">
          <button
            onClick={() => scrollToSection("home")}
            className="text-xl font-bold text-primary hover:opacity-80 transition-opacity"
          >
            Portfólio
          </button>
          <nav className="flex gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-sm font-medium transition-colors hover:text-primary text-text-secondary"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-sm font-medium transition-colors hover:text-primary text-text-secondary"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-sm font-medium transition-colors hover:text-primary text-text-secondary"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium transition-colors hover:text-primary text-text-secondary"
            >
              Contato
            </button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Home Section */}
        <section id="home" className="container mx-auto px-6 py-20 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-64 h-80 rounded-3xl overflow-hidden shadow-lg">
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
                  Entusiasta da resolução de problemas, atuo como um facilitador entre os dados e
                  as decisões, traduzindo números em insights claros e acionáveis. Estou
                  constantemente explorando novas abordagens, ferramentas e tecnologias para tornar
                  minhas análises cada vez mais precisas, ágeis e impactantes.
                </p>
              </div>

              <div className="flex gap-4">
                <Button size="lg" className="px-8" onClick={() => scrollToSection("projects")}>
                  Projetos
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8"
                  onClick={() => scrollToSection("contact")}
                >
                  Contato
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="bg-secondary/30 py-20">
          <div className="container mx-auto px-6 max-w-7xl">
            {/* Capacidades */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-text-primary mb-4">Capacidades</h2>
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

            {/* Tecnologias */}
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
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-text-primary mb-4">Projetos</h2>
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
                    <p className="text-text-secondary leading-relaxed">{project.description}</p>
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
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-secondary/30 py-20">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <MessageSquare className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-4xl font-bold text-text-primary mb-4">Vamos Conversar?</h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades de
                colaboração
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="lg:col-span-2">
                <Card>
                  <CardContent className="p-8">
                    <form form action="https://formsubmit.co/gabrielmzuliani@gmail.com" method="POST">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-text-primary mb-2"
                        >
                          Nome
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Seu nome completo"
                          required
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-text-primary mb-2"
                        >
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="seu.email@exemplo.com"
                          required
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-text-primary mb-2"
                        >
                          Mensagem
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Conte-me sobre seu projeto ou ideia..."
                          rows={6}
                          required
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full">
                        Enviar Mensagem
                        <Send className="w-4 h-4 ml-2" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-text-primary mb-4">
                    Outras Formas de Contato
                  </h3>
                  <div className="space-y-4">
                    <Card className="cursor-pointer hover:shadow-md transition-shadow">
                      <CardContent className="p-4 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Mail className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <a href="mailto:gabrielmzuliani@gmail.com">
                          <p className="font-medium text-text-primary">Email</p>
                          <p className="text-sm text-text-secondary">gabrielmzuliani@gmail.com</p>
                          </a>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="cursor-pointer hover:shadow-md transition-shadow">
                      <CardContent className="p-4 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Linkedin className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <a href="https://www.linkedin.com/in/gabriel-zuliani?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BdyVORGuoQb6Wo5x%2FE6T%2FLg%3D%3D" target="_blank">
                          <p className="font-medium text-text-primary">LinkedIn</p>
                          <p className="text-sm text-text-secondary">Gabriel Zuliani</p>
                          </a>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="cursor-pointer hover:shadow-md transition-shadow">
                      <CardContent className="p-4 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Github className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-text-primary">GitHub</p>
                          <p className="text-sm text-text-secondary">Veja meus projetos</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-text-primary mb-2">Disponibilidade</h4>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      Atualmente aberto a novas oportunidades. Tempo de
                      resposta médio: 24-48 horas.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
