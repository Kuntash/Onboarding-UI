import { Person, Groups } from '@mui/icons-material';
export const formList = [
  {
    id: 1,
    heading: 'Welcome! First thing first...',
    subHeading: 'You can always change them later.',
    formInputs: [
      {
        inputName: 'fullName',
        inputLabel: 'Full Name',
        inputPlaceHolder: 'Steve Jobs',
        inputType: 'text',
        isOptional: false
      },
      {
        inputName: 'displayName',
        inputLabel: 'Display Name',
        inputPlaceHolder: 'Steve',
        inputType: 'text',
        isOptional: false
      }
    ]
  },
  {
    id: 2,
    heading: "Let's set up a home for all your work",
    subHeading: 'You can always create another workspace later.',
    formInputs: [
      {
        inputName: 'workspaceName',
        inputLabel: 'Workspace Name',
        inputPlaceHolder: 'Eden',
        inputType: 'text',
        isOptional: false
      },
      {
        inputName: 'workspaceUrl',
        inputLabel: 'Workspace URL',
        inputPlaceHolder: 'Example',
        prefixUrl: 'www.eden.com/',
        inputType: 'url',
        isOptional: true
      }
    ]
  },
  {
    id: 3,
    heading: 'How are you planning to use Eden?',
    subHeading: "We'll streamline your setup experience accordingly.",
    formInputs: [
      {
        inputName: 'useType',
        inputType: 'radio',
        options: [
          {
            icon: <Person className='option-icon' fontSize='20px' />,
            name: 'personal',
            heading: 'For myself',
            body: 'Write better. Think more clearly. Stay organized'
          },
          {
            icon: <Groups className='option-icon' />,
            name: 'team',
            heading: 'With my team',
            body: 'Wikis, docs, tasks & projects, all in one place.'
          }
        ]
      }
    ]
  }
];
