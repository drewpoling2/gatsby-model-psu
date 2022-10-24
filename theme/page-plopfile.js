module.exports = function(plop) {
  // controller generator
  plop.setGenerator('page', {
    description: 'Template design page creation logic',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Please enter the page name',
      },
    ],
    actions: [
      {
        type: 'add',
        path: './src/pages/{{pascalCase name}}.jsx',
        templateFile: 'plop-templates/page.jsx.hbs',
      },
    ],
  });
};
