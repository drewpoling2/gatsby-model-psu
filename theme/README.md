_PLOP COMMANDS_
_to generate a new component_
cd theme
yarn generate-c

_the generate commands make a call to component-plopfile.js_
_the templates can be found in the plop-templates folder_

|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

_BIT.DEV COMMANDS_
_to install bit cli_
yarn add bit-bin --global

_to start tracking all components under the ‘components’ directory_
bit add src/components/\*

_to install and configure a compiler for these components_
bit import bit.envs/compilers/react --compiler

_to tag components_
bit tag --all

_to login to bit_
bit login

_to publish components_
bit export psu-mfe.components

_the generate commands make a call to component-plopfile.js & page-plopfile.js_
_the templates can be found in the plop-templates folder_

|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

_FOR LOCAL TESTING NEW COMPONENTS_
_to grab packages_
yarn
