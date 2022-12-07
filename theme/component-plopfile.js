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
    ],
    actions: function(data) {
      var actions = [];

      actions.push(
        {
          type: 'add',
          path:
            './src/components/{{pascalCase name}}/{{pascalCase name}}.test.js',
          templateFile: 'plop-templates/test.js.hbs',
        },
        {
          type: 'add',
          path: './src/components/{{pascalCase name}}/{{pascalCase name}}.jsx',
          templateFile: 'plop-templates/component.jsx.hbs',
        },
        {
          type: 'add',
          path:
            './src/components/{{pascalCase name}}/{{pascalCase name}}.composition.jsx',
          templateFile: 'plop-templates/composition.jsx.hbs',
        }
      );

      return actions;
    },
  });
};
