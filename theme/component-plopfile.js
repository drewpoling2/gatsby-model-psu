/* eslint-disable import/no-anonymous-default-export */
module.exports = function(plop) {
  plop.setGenerator('component', {
    description: 'Atomic Design component creation logic',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Please enter the component name',
      },
      {
        type: 'confirm',
        name: 'wantServiceFile',
        message: 'Do you want this component to have a unique service file?',
      },
    ],
    actions: function(data) {
      var actions = [];

      if (data.wantServiceFile) {
        actions.push(
          {
            type: 'add',
            path: './src/components/{{name}}/{{name}}.test.js',
            templateFile: 'plop-templates/test.js.hbs',
          },
          {
            type: 'add',
            path: './src/components/{{name}}/{{pascalCase name}}.jsx',
            templateFile: 'plop-templates/component.jsx.hbs',
          },
          {
            type: 'add',
            path: './src/components/{{name}}/{{pascalCase name}}-service.jsx',
            templateFile: 'plop-templates/component-service.jsx.hbs',
          }
        );
      } else {
        actions.push(
          {
            type: 'add',
            path: './src/components/{{name}}/{{name}}.test.js',
            templateFile: 'plop-templates/test.js.hbs',
          },
          {
            type: 'add',
            path: './src/components/{{name}}/{{pascalCase name}}.jsx',
            templateFile: 'plop-templates/component.jsx.hbs',
          }
        );
      }

      return actions;
    },
  });
};
