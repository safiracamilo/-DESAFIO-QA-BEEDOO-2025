module.exports = {
  e2e: {
    baseUrl: 'https://creative-sherbet-a51eac.netlify.app/',
    
    // Configuração padrão desktop
    viewportWidth: 1920,
    viewportHeight: 1080,
    
    setupNodeEvents(on, config) {
      return config;
    },
  },
  
  // Configuração para testes mobile
  component: {
    viewportWidth: 375,
    viewportHeight: 667,
  }
};