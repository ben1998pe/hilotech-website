import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ChevronDown, 
  Users, 
  Target, 
  Shield, 
  Zap, 
  Monitor, 
  Phone, 
  Mail, 
  MapPin,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';

// Animated Section Component
const AnimatedSection = ({ children, className = "", delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Hero Section
const Hero = () => {
  return (
    <section className="min-h-screen gradient-bg flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 text-center text-white relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            An available, innovative and{' '}
            <span className="text-yellow-300">proactive</span> team
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Your needs, targeted. We adapt IT solutions to your real needs, analyzing your work process 
            to define the best way to improve your productivity and IT security.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg 
                     hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 mx-auto"
          >
            Consult a Specialist
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-white/70" />
        </motion.div>
      </div>
    </section>
  );
};

// About Section
const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Basic Concept
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Nowadays, the majority of companies working in the field of information technology 
            will present solutions or service contracts without knowing the real needs or the daily 
            operations of their customers, but not Hilo!
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection delay={0.2}>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Your needs, targeted
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Hilo offers a personalized service by adapting IT solutions to your real needs. 
                Hilo will analyze your work process and define the best way to implement solutions 
                to improve your productivity and IT security.
              </p>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span className="text-lg font-semibold text-gray-900">
                  At Hilo, we work according to your needs!
                </span>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="relative">
              <motion.div
                animate={{ rotate: 5 }}
                transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
                className="bg-gradient-to-br from-primary-500 to-primary-700 p-8 rounded-2xl 
                         text-white shadow-2xl"
              >
                <Target className="w-16 h-16 mb-6" />
                <h4 className="text-2xl font-bold mb-4">Personalized Solutions</h4>
                <p className="text-lg opacity-90">
                  We don't believe in one-size-fits-all. Every solution is tailored to your 
                  specific business requirements and operational needs.
                </p>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

// Services Section
const Services = () => {
  const services = [
    {
      icon: <Users className="w-12 h-12" />,
      title: "Without Engagement",
      description: "We do not believe in long-term service contracts. At Hilo, you will benefit from a monthly agreement. We want our customers to choose us and build a long-term business relationship with us because of the good service we provide.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Continuous Innovation",
      description: "We are constantly questioning ourselves to provide the best possible and up-to-date solution to the needs of our customers. Factors include productivity, security, speed and quality of service, and cost-effective solutions (ROI).",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Monitoring & Protection Tools",
      description: "We use the best tools in our industry to offer the best to our customers. Our cloud monitoring system applies daily security and system updates and scripts to block CryptoLocker.",
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our innovative approach sets us apart from traditional IT service providers
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-lg card-hover"
              >
                <div className={`bg-gradient-to-r ${service.color} p-4 rounded-xl text-white mb-6 
                              inline-block`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

// Features Section
const Features = () => {
  const features = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Cloud Monitoring",
      description: "Daily security and system updates with automatic threat detection"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "CryptoLocker Protection",
      description: "Advanced scripts and monitoring to block ransomware attacks"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Quick Response",
      description: "Automatic alerts to our technical team for immediate resolution"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Proactive Solutions",
      description: "Implement solutions before problems arise within your company"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Advanced Protection System
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Thanks to our monitoring system, we detect irregularities in your infrastructure quickly 
            and automatically inform our technical assistance team to implement appropriate solutions.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 
                         transition-all duration-300"
              >
                <div className="bg-primary-500 p-3 rounded-full text-white mb-4 
                              inline-block">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section
const Contact = () => {
  return (
    <section className="py-20 gradient-bg">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Contact our team of specialists and discover how we can transform your IT infrastructure
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12">
          <AnimatedSection delay={0.2}>
            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-white/80" />
                  <span className="text-white/90">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-white/80" />
                  <span className="text-white/90">info@hilotech.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-white/80" />
                  <span className="text-white/90">123 Tech Street, Innovation City</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">
                Why Choose Hilo?
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-yellow-300" />
                  <span className="text-white/90">No long-term contracts</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-yellow-300" />
                  <span className="text-white/90">Personalized solutions</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-yellow-300" />
                  <span className="text-white/90">24/7 monitoring & protection</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-yellow-300" />
                  <span className="text-white/90">Proactive problem resolution</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.6} className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg 
                     hover:bg-gray-100 transition-all duration-300"
          >
            Consult a Specialist Today
          </motion.button>
        </AnimatedSection>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl font-bold mb-4">Hilo Tech</h3>
          <p className="text-gray-400 mb-6">
            Available, innovative and proactive IT solutions team
          </p>
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-500">
              © 2024 Hilo Tech. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Services />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}

export default App; 