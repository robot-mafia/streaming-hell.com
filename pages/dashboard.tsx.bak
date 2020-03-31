import { NextPage, NextPageContext } from 'next';
import styled from 'styled-components';
import React, { Fragment } from 'react';
import EmojiAtlassianIcon from '@atlaskit/icon/glyph/emoji/atlassian';
import GlobalNavigation from '@atlaskit/global-navigation';
import AppSwitcherIcon from '@atlaskit/icon/glyph/app-switcher';
import {
  GlobalItem,
  LayoutManager,
  NavigationProvider,
} from '@atlaskit/navigation-next';
import DynamicTable from '@atlaskit/dynamic-table';

const Wrapper = styled.div`
  background-color: #fafbfc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  width: 100%;
`;

const Container = styled.div`
  margin-top: 40px;
  max-width: 280px;

  @media (min-width: 380px) {
    max-width: 345px;
  }

  width: 100%;
  height: 100%;
  flex: 1 0 0%;
  margin: auto;
  padding: 16px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px;
  box-sizing: border-box;
  color: rgb(94, 108, 132);
  margin: 0px auto 24px;
  padding: 32px 40px;
  background: rgb(255, 255, 255);
  border-radius: 3px;
`;

const Title = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin-bottom: 24px;
  color: rgb(94, 108, 132);
  font-size: 16px;
  font-weight: 700;
`;

export type LoginPageProps = {};

const AppSwitcherComponent = props => (
  <GlobalItem
    {...props}
    icon={AppSwitcherIcon}
    id="test"
    onClick={() => console.log('AppSwitcher clicked')}
  />
);

const SearchTooltip = () => (
  <div css={{ background: 'red' }}> Search Tooltip</div>
);

const Global = () => (
  <GlobalNavigation
    productIcon={EmojiAtlassianIcon}
    productHref="#"
    searchTooltip={<SearchTooltip />}
    searchLabel="Search Label"
    onProductClick={() => console.log('product clicked')}
    onCreateClick={() => console.log('create clicked')}
    onSearchClick={() => console.log('search clicked')}
    onStarredClick={() => console.log('starred clicked')}
    onHelpClick={() => console.log('help clicked')}
    helpItems={() => <div />}
    onNotificationClick={() => console.log('notification clicked')}
    appSwitcherComponent={AppSwitcherComponent}
    appSwitcherTooltip="Switch to ..."
    onSettingsClick={() => console.log('settings clicked')}
    loginHref="#login"
  />
);

const rows = [
  {
    key: 'row-0-George Washington',
    cells: [
      {
        key: 'GeorgeWashington',
        content: {
          key: null,
          ref: null,
          props: {
            children: [
              {
                key: null,
                ref: null,
                props: {
                  children: {
                    type: {
                      displayName:
                        'WithAnalyticsContext(WithAnalyticsEvents(mapProps(withPseudoState(n))))',
                    },
                    key: null,
                    ref: null,
                    props: {
                      name: 'George Washington',
                      size: 'medium',
                      src:
                        'https://api.adorable.io/avatars/24/George%20Washington.png',
                    },
                    _owner: null,
                  },
                },
                _owner: null,
              },
              {
                type: 'a',
                key: null,
                ref: null,
                props: {
                  href: 'https://atlassian.design',
                  children: 'George Washington',
                },
                _owner: null,
              },
            ],
          },
          _owner: null,
        },
      },
      { key: 'None,Federalist', content: 'None, Federalist' },
      { key: 1, content: '1789-1797' },
      { content: 0 },
      {
        content: {
          key: null,
          ref: null,
          props: {
            trigger: 'More',
            triggerType: 'button',
            children: {
              key: null,
              ref: null,
              props: {
                children: {
                  key: null,
                  ref: null,
                  props: { children: 'George Washington' },
                  _owner: null,
                },
              },
              _owner: null,
            },
            appearance: 'default',
            boundariesElement: 'viewport',
            defaultOpen: false,
            isLoading: false,
            isOpen: false,
            items: [],
            position: 'bottom left',
            isMenuFixed: false,
            shouldAllowMultilineItems: false,
            shouldFitContainer: false,
            shouldFlip: true,
          },
          _owner: null,
        },
      },
    ],
  },
  {
    key: 'row-1-John Adams',
    cells: [
      {
        key: 'JohnAdams',
        content: {
          key: null,
          ref: null,
          props: {
            children: [
              {
                key: null,
                ref: null,
                props: {
                  children: {
                    key: null,
                    ref: null,
                    props: {
                      name: 'John Adams',
                      size: 'medium',
                      src:
                        'https://api.adorable.io/avatars/24/John%20Adams.png',
                    },
                    _owner: null,
                  },
                },
                _owner: null,
              },
              {
                type: 'a',
                key: null,
                ref: null,
                props: {
                  href: 'https://atlassian.design',
                  children: 'John Adams',
                },
                _owner: null,
              },
            ],
          },
          _owner: null,
        },
      },
      { key: 'Federalist', content: 'Federalist' },
      { key: 2, content: '1797-1801' },
      { content: 1 },
      {
        content: {
          key: null,
          ref: null,
          props: {
            trigger: 'More',
            triggerType: 'button',
            children: {
              key: null,
              ref: null,
              props: {
                children: {
                  key: null,
                  ref: null,
                  props: { children: 'John Adams' },
                  _owner: null,
                },
              },
              _owner: null,
            },
            appearance: 'default',
            boundariesElement: 'viewport',
            defaultOpen: false,
            isLoading: false,
            isOpen: false,
            position: 'bottom left',
            isMenuFixed: false,
            shouldAllowMultilineItems: false,
            shouldFitContainer: false,
            shouldFlip: true,
          },
          _owner: null,
        },
      },
    ],
  },
  {
    key: 'row-2-Thomas Jefferson',
    cells: [
      {
        key: 'ThomasJefferson',
        content: {
          key: null,
          ref: null,
          props: {
            children: [
              {
                key: null,
                ref: null,
                props: {
                  children: {
                    key: null,
                    ref: null,
                    props: {
                      name: 'Thomas Jefferson',
                      size: 'medium',
                      src:
                        'https://api.adorable.io/avatars/24/Thomas%20Jefferson.png',
                    },
                    _owner: null,
                  },
                },
                _owner: null,
              },
              {
                type: 'a',
                key: null,
                ref: null,
                props: {
                  href: 'https://atlassian.design',
                  children: 'Thomas Jefferson',
                },
                _owner: null,
              },
            ],
          },
          _owner: null,
        },
      },
      { key: 'Democratic-Republican', content: 'Democratic-Republican' },
      { key: 3, content: '1801-1809' },
      { content: 2 },
      {
        content: {
          key: null,
          ref: null,
          props: {
            trigger: 'More',
            triggerType: 'button',
            children: {
              key: null,
              ref: null,
              props: {
                children: {
                  key: null,
                  ref: null,
                  props: { children: 'Thomas Jefferson' },
                  _owner: null,
                },
              },
              _owner: null,
            },
            appearance: 'default',
            boundariesElement: 'viewport',
            defaultOpen: false,
            isLoading: false,
            isOpen: false,
            position: 'bottom left',
            isMenuFixed: false,
            shouldAllowMultilineItems: false,
            shouldFitContainer: false,
            shouldFlip: true,
          },
          _owner: null,
        },
      },
    ],
  },
  {
    key: 'row-3-James Madison',
    cells: [
      {
        key: 'JamesMadison',
        content: {
          key: null,
          ref: null,
          props: {
            children: [
              {
                key: null,
                ref: null,
                props: {
                  children: {
                    key: null,
                    ref: null,
                    props: {
                      name: 'James Madison',
                      size: 'medium',
                      src:
                        'https://api.adorable.io/avatars/24/James%20Madison.png',
                    },
                    _owner: null,
                  },
                },
                _owner: null,
              },
              {
                type: 'a',
                key: null,
                ref: null,
                props: {
                  href: 'https://atlassian.design',
                  children: 'James Madison',
                },
                _owner: null,
              },
            ],
          },
          _owner: null,
        },
      },
      { key: 'Democratic-Republican', content: 'Democratic-Republican' },
      { key: 4, content: '1809-1817' },
      { content: 3 },
      {
        content: {
          key: null,
          ref: null,
          props: {
            trigger: 'More',
            triggerType: 'button',
            children: {
              key: null,
              ref: null,
              props: {
                children: {
                  key: null,
                  ref: null,
                  props: { children: 'James Madison' },
                  _owner: null,
                },
              },
              _owner: null,
            },
            appearance: 'default',
            boundariesElement: 'viewport',
            defaultOpen: false,
            isLoading: false,
            isOpen: false,
            position: 'bottom left',
            isMenuFixed: false,
            shouldAllowMultilineItems: false,
            shouldFitContainer: false,
            shouldFlip: true,
          },
          _owner: null,
        },
      },
    ],
  },
  {
    key: 'row-4-James Monroe',
    cells: [
      {
        key: 'JamesMonroe',
        content: {
          key: null,
          ref: null,
          props: {
            children: [
              {
                key: null,
                ref: null,
                props: {
                  children: {
                    key: null,
                    ref: null,
                    props: {
                      name: 'James Monroe',
                      size: 'medium',
                      src:
                        'https://api.adorable.io/avatars/24/James%20Monroe.png',
                    },
                    _owner: null,
                  },
                },
                _owner: null,
              },
              {
                type: 'a',
                key: null,
                ref: null,
                props: {
                  href: 'https://atlassian.design',
                  children: 'James Monroe',
                },
                _owner: null,
              },
            ],
          },
          _owner: null,
        },
      },
      { key: 'Democratic-Republican', content: 'Democratic-Republican' },
      { key: 5, content: '1817-1825' },
      { content: 4 },
      {
        content: {
          key: null,
          ref: null,
          props: {
            trigger: 'More',
            triggerType: 'button',
            children: {
              key: null,
              ref: null,
              props: {
                children: {
                  key: null,
                  ref: null,
                  props: { children: 'James Monroe' },
                  _owner: null,
                },
              },
              _owner: null,
            },
            appearance: 'default',
            boundariesElement: 'viewport',
            defaultOpen: false,
            isLoading: false,
            isOpen: false,
            position: 'bottom left',
            isMenuFixed: false,
            shouldAllowMultilineItems: false,
            shouldFitContainer: false,
            shouldFlip: true,
          },
          _owner: null,
        },
      },
    ],
  },
  {
    key: 'row-5-John Quincy Adams',
    cells: [
      {
        key: 'JohnQuincyAdams',
        content: {
          key: null,
          ref: null,
          props: {
            children: [
              {
                key: null,
                ref: null,
                props: {
                  children: {
                    key: null,
                    ref: null,
                    props: {
                      name: 'John Quincy Adams',
                      size: 'medium',
                      src:
                        'https://api.adorable.io/avatars/24/John%20Quincy%20Adams.png',
                    },
                    _owner: null,
                  },
                },
                _owner: null,
              },
              {
                type: 'a',
                key: null,
                ref: null,
                props: {
                  href: 'https://atlassian.design',
                  children: 'John Quincy Adams',
                },
                _owner: null,
              },
            ],
          },
          _owner: null,
        },
      },
      { key: 'Democratic-Republican', content: 'Democratic-Republican' },
      { key: 6, content: '1825-1829' },
      { content: 5 },
      {
        content: {
          key: null,
          ref: null,
          props: {
            trigger: 'More',
            triggerType: 'button',
            children: {
              key: null,
              ref: null,
              props: {
                children: {
                  key: null,
                  ref: null,
                  props: { children: 'John Quincy Adams' },
                  _owner: null,
                },
              },
              _owner: null,
            },
            appearance: 'default',
            boundariesElement: 'viewport',
            defaultOpen: false,
            isLoading: false,
            isOpen: false,
            position: 'bottom left',
            isMenuFixed: false,
            shouldAllowMultilineItems: false,
            shouldFitContainer: false,
            shouldFlip: true,
          },
          _owner: null,
        },
      },
    ],
  },
  {
    key: 'row-6-Andrew Jackson',
    cells: [
      {
        key: 'AndrewJackson',
        content: {
          key: null,
          ref: null,
          props: {
            children: [
              {
                key: null,
                ref: null,
                props: {
                  children: {
                    key: null,
                    ref: null,
                    props: {
                      name: 'Andrew Jackson',
                      size: 'medium',
                      src:
                        'https://api.adorable.io/avatars/24/Andrew%20Jackson.png',
                    },
                    _owner: null,
                  },
                },
                _owner: null,
              },
              {
                type: 'a',
                key: null,
                ref: null,
                props: {
                  href: 'https://atlassian.design',
                  children: 'Andrew Jackson',
                },
                _owner: null,
              },
            ],
          },
          _owner: null,
        },
      },
      { key: 'Democrat', content: 'Democrat' },
      { key: 7, content: '1829-1837' },
      { content: 6 },
      {
        content: {
          key: null,
          ref: null,
          props: {
            trigger: 'More',
            triggerType: 'button',
            children: {
              key: null,
              ref: null,
              props: {
                children: {
                  key: null,
                  ref: null,
                  props: { children: 'Andrew Jackson' },
                  _owner: null,
                },
              },
              _owner: null,
            },
            appearance: 'default',
            boundariesElement: 'viewport',
            defaultOpen: false,
            isLoading: false,
            isOpen: false,
            position: 'bottom left',
            isMenuFixed: false,
            shouldAllowMultilineItems: false,
            shouldFitContainer: false,
            shouldFlip: true,
          },
          _owner: null,
        },
      },
    ],
  },
  {
    key: 'row-7-Martin van Buren',
    cells: [
      {
        key: 'MartinvanBuren',
        content: {
          key: null,
          ref: null,
          props: {
            children: [
              {
                key: null,
                ref: null,
                props: {
                  children: {
                    key: null,
                    ref: null,
                    props: {
                      name: 'Martin van Buren',
                      size: 'medium',
                      src:
                        'https://api.adorable.io/avatars/24/Martin%20van%20Buren.png',
                    },
                    _owner: null,
                  },
                },
                _owner: null,
              },
              {
                type: 'a',
                key: null,
                ref: null,
                props: {
                  href: 'https://atlassian.design',
                  children: 'Martin van Buren',
                },
                _owner: null,
              },
            ],
          },
          _owner: null,
        },
      },
      { key: 'Democrat', content: 'Democrat' },
      { key: 8, content: '1837-1841' },
      { content: 7 },
      {
        content: {
          key: null,
          ref: null,
          props: {
            trigger: 'More',
            triggerType: 'button',
            children: {
              key: null,
              ref: null,
              props: {
                children: {
                  key: null,
                  ref: null,
                  props: { children: 'Martin van Buren' },
                  _owner: null,
                },
              },
              _owner: null,
            },
            appearance: 'default',
            boundariesElement: 'viewport',
            defaultOpen: false,
            isLoading: false,
            isOpen: false,
            position: 'bottom left',
            isMenuFixed: false,
            shouldAllowMultilineItems: false,
            shouldFitContainer: false,
            shouldFlip: true,
          },
          _owner: null,
        },
      },
    ],
  },
  {
    key: 'row-8-William H. Harrison',
    cells: [
      {
        key: 'WilliamH.Harrison',
        content: {
          key: null,
          ref: null,
          props: {
            children: [
              {
                key: null,
                ref: null,
                props: {
                  children: {
                    key: null,
                    ref: null,
                    props: {
                      name: 'William H. Harrison',
                      size: 'medium',
                      src:
                        'https://api.adorable.io/avatars/24/William%20H.%20Harrison.png',
                    },
                    _owner: null,
                  },
                },
                _owner: null,
              },
              {
                type: 'a',
                key: null,
                ref: null,
                props: {
                  href: 'https://atlassian.design',
                  children: 'William H. Harrison',
                },
                _owner: null,
              },
            ],
          },
          _owner: null,
        },
      },
      { key: 'Whig', content: 'Whig' },
      { key: 9, content: '1841' },
      { content: 8 },
      {
        content: {
          key: null,
          ref: null,
          props: {
            trigger: 'More',
            triggerType: 'button',
            children: {
              key: null,
              ref: null,
              props: {
                children: {
                  key: null,
                  ref: null,
                  props: { children: 'William H. Harrison' },
                  _owner: null,
                },
              },
              _owner: null,
            },
            appearance: 'default',
            boundariesElement: 'viewport',
            defaultOpen: false,
            isLoading: false,
            isOpen: false,
            position: 'bottom left',
            isMenuFixed: false,
            shouldAllowMultilineItems: false,
            shouldFitContainer: false,
            shouldFlip: true,
          },
          _owner: null,
        },
      },
    ],
  },
  {
    key: 'row-9-John Tyler',
    cells: [
      {
        key: 'JohnTyler',
        content: {
          key: null,
          ref: null,
          props: {
            children: [
              {
                key: null,
                ref: null,
                props: {
                  children: {
                    key: null,
                    ref: null,
                    props: {
                      name: 'John Tyler',
                      size: 'medium',
                      src:
                        'https://api.adorable.io/avatars/24/John%20Tyler.png',
                    },
                    _owner: null,
                  },
                },
                _owner: null,
              },
              {
                type: 'a',
                key: null,
                ref: null,
                props: {
                  href: 'https://atlassian.design',
                  children: 'John Tyler',
                },
                _owner: null,
              },
            ],
          },
          _owner: null,
        },
      },
      { key: 'Whig', content: 'Whig' },
      { key: 10, content: '1841-1845' },
      { content: 9 },
      {
        content: {
          key: null,
          ref: null,
          props: {
            trigger: 'More',
            triggerType: 'button',
            children: {
              key: null,
              ref: null,
              props: {
                children: {
                  key: null,
                  ref: null,
                  props: { children: 'John Tyler' },
                  _owner: null,
                },
              },
              _owner: null,
            },
            appearance: 'default',
            boundariesElement: 'viewport',
            defaultOpen: false,
            isLoading: false,
            isOpen: false,
            position: 'bottom left',
            isMenuFixed: false,
            shouldAllowMultilineItems: false,
            shouldFitContainer: false,
            shouldFlip: true,
          },
          _owner: null,
        },
      },
    ],
  },
  {
    key: 'row-10-James K. Polk',
    cells: [
      {
        key: 'JamesK.Polk',
        content: {
          key: null,
          ref: null,
          props: {
            children: [
              {
                key: null,
                ref: null,
                props: {
                  children: {
                    key: null,
                    ref: null,
                    props: {
                      name: 'James K. Polk',
                      size: 'medium',
                      src:
                        'https://api.adorable.io/avatars/24/James%20K.%20Polk.png',
                    },
                    _owner: null,
                  },
                },
                _owner: null,
              },
              {
                type: 'a',
                key: null,
                ref: null,
                props: {
                  href: 'https://atlassian.design',
                  children: 'James K. Polk',
                },
                _owner: null,
              },
            ],
          },
          _owner: null,
        },
      },
      { key: 'Democrat', content: 'Democrat' },
      { key: 11, content: '1845-1849' },
      { content: 10 },
      {
        content: {
          key: null,
          ref: null,
          props: {
            trigger: 'More',
            triggerType: 'button',
            children: {
              key: null,
              ref: null,
              props: {
                children: {
                  key: null,
                  ref: null,
                  props: { children: 'James K. Polk' },
                  _owner: null,
                },
              },
              _owner: null,
            },
            appearance: 'default',
            boundariesElement: 'viewport',
            defaultOpen: false,
            isLoading: false,
            isOpen: false,
            position: 'bottom left',
            isMenuFixed: false,
            shouldAllowMultilineItems: false,
            shouldFitContainer: false,
            shouldFlip: true,
          },
          _owner: null,
        },
      },
    ],
  },
  {
    key: 'row-11-Zachary Taylor',
    cells: [
      {
        key: 'ZacharyTaylor',
        content: {
          key: null,
          ref: null,
          props: {
            children: [
              {
                key: null,
                ref: null,
                props: {
                  children: {
                    key: null,
                    ref: null,
                    props: {
                      name: 'Zachary Taylor',
                      size: 'medium',
                      src:
                        'https://api.adorable.io/avatars/24/Zachary%20Taylor.png',
                    },
                    _owner: null,
                  },
                },
                _owner: null,
              },
              {
                type: 'a',
                key: null,
                ref: null,
                props: {
                  href: 'https://atlassian.design',
                  children: 'Zachary Taylor',
                },
                _owner: null,
              },
            ],
          },
          _owner: null,
        },
      },
      { key: 'Whig', content: 'Whig' },
      { key: 12, content: '1849-1850' },
      { content: 1 },
      {
        content: {
          key: null,
          ref: null,
          props: {
            trigger: 'More',
            triggerType: 'button',
            children: {
              key: null,
              ref: null,
              props: {
                children: {
                  key: null,
                  ref: null,
                  props: { children: 'Zachary Taylor' },
                  _owner: null,
                },
              },
              _owner: null,
            },
            appearance: 'default',
            boundariesElement: 'viewport',
            defaultOpen: false,
            isLoading: false,
            isOpen: false,
            position: 'bottom left',
            isMenuFixed: false,
            shouldAllowMultilineItems: false,
            shouldFitContainer: false,
            shouldFlip: true,
          },
          _owner: null,
        },
      },
    ],
  },
  {
    key: 'row-12-Millard Fillmore',
    cells: [
      {
        key: 'MillardFillmore',
        content: {
          key: null,
          ref: null,
          props: {
            children: [
              {
                key: null,
                ref: null,
                props: {
                  children: {
                    key: null,
                    ref: null,
                    props: {
                      name: 'Millard Fillmore',
                      size: 'medium',
                      src:
                        'https://api.adorable.io/avatars/24/Millard%20Fillmore.png',
                    },
                    _owner: null,
                  },
                },
                _owner: null,
              },
              {
                type: 'a',
                key: null,
                ref: null,
                props: {
                  href: 'https://atlassian.design',
                  children: 'Millard Fillmore',
                },
                _owner: null,
              },
            ],
          },
          _owner: null,
        },
      },
      { key: 'Whig', content: 'Whig' },
      { key: 13, content: '1850-1853' },
      { content: 2 },
      {
        content: {
          key: null,
          ref: null,
          props: {
            trigger: 'More',
            triggerType: 'button',
            children: {
              key: null,
              ref: null,
              props: {
                children: {
                  key: null,
                  ref: null,
                  props: { children: 'Millard Fillmore' },
                  _owner: null,
                },
              },
              _owner: null,
            },
            appearance: 'default',
            boundariesElement: 'viewport',
            defaultOpen: false,
            isLoading: false,
            isOpen: false,
            position: 'bottom left',
            isMenuFixed: false,
            shouldAllowMultilineItems: false,
            shouldFitContainer: false,
            shouldFlip: true,
          },
          _owner: null,
        },
      },
    ],
  },
  {
    key: 'row-13-Franklin Pierce',
    cells: [
      {
        key: 'FranklinPierce',
        content: {
          key: null,
          ref: null,
          props: {
            children: [
              {
                key: null,
                ref: null,
                props: {
                  children: {
                    key: null,
                    ref: null,
                    props: {
                      name: 'Franklin Pierce',
                      size: 'medium',
                      src:
                        'https://api.adorable.io/avatars/24/Franklin%20Pierce.png',
                    },
                    _owner: null,
                  },
                },
                _owner: null,
              },
              {
                type: 'a',
                key: null,
                ref: null,
                props: {
                  href: 'https://atlassian.design',
                  children: 'Franklin Pierce',
                },
                _owner: null,
              },
            ],
          },
          _owner: null,
        },
      },
      { key: 'Democrat', content: 'Democrat' },
      { key: 14, content: '1853-1857' },
      { content: 3 },
      {
        content: {
          key: null,
          ref: null,
          props: {
            trigger: 'More',
            triggerType: 'button',
            children: {
              key: null,
              ref: null,
              props: {
                children: {
                  key: null,
                  ref: null,
                  props: { children: 'Franklin Pierce' },
                  _owner: null,
                },
              },
              _owner: null,
            },
            appearance: 'default',
            boundariesElement: 'viewport',
            defaultOpen: false,
            isLoading: false,
            isOpen: false,
            position: 'bottom left',
            isMenuFixed: false,
            shouldAllowMultilineItems: false,
            shouldFitContainer: false,
            shouldFlip: true,
          },
          _owner: null,
        },
      },
    ],
  },
  {
    key: 'row-14-James Buchanan',
    cells: [
      {
        key: 'JamesBuchanan',
        content: {
          key: null,
          ref: null,
          props: {
            children: [
              {
                key: null,
                ref: null,
                props: {
                  children: {
                    key: null,
                    ref: null,
                    props: {
                      name: 'James Buchanan',
                      size: 'medium',
                      src:
                        'https://api.adorable.io/avatars/24/James%20Buchanan.png',
                    },
                    _owner: null,
                  },
                },
                _owner: null,
              },
              {
                type: 'a',
                key: null,
                ref: null,
                props: {
                  href: 'https://atlassian.design',
                  children: 'James Buchanan',
                },
                _owner: null,
              },
            ],
          },
          _owner: null,
        },
      },
      { key: 'Democrat', content: 'Democrat' },
      { key: 15, content: '1857-1861' },
      { content: 4 },
      {
        content: {
          key: null,
          ref: null,
          props: {
            trigger: 'More',
            triggerType: 'button',
            children: {
              key: null,
              ref: null,
              props: {
                children: {
                  key: null,
                  ref: null,
                  props: { children: 'James Buchanan' },
                  _owner: null,
                },
              },
              _owner: null,
            },
            appearance: 'default',
            boundariesElement: 'viewport',
            defaultOpen: false,
            isLoading: false,
            isOpen: false,
            position: 'bottom left',
            isMenuFixed: false,
            shouldAllowMultilineItems: false,
            shouldFitContainer: false,
            shouldFlip: true,
          },
          _owner: null,
        },
      },
    ],
  },
  {
    key: 'row-15-Abraham Lincoln',
    cells: [
      {
        key: 'AbrahamLincoln',
        content: {
          key: null,
          ref: null,
          props: {
            children: [
              {
                key: null,
                ref: null,
                props: {
                  children: {
                    key: null,
                    ref: null,
                    props: {
                      name: 'Abraham Lincoln',
                      size: 'medium',
                      src:
                        'https://api.adorable.io/avatars/24/Abraham%20Lincoln.png',
                    },
                    _owner: null,
                  },
                },
                _owner: null,
              },
              {
                type: 'a',
                key: null,
                ref: null,
                props: {
                  href: 'https://atlassian.design',
                  children: 'Abraham Lincoln',
                },
                _owner: null,
              },
            ],
          },
          _owner: null,
        },
      },
      { key: 'Republican', content: 'Republican' },
      { key: 16, content: '1861-1865' },
      { content: 5 },
      {
        content: {
          key: null,
          ref: null,
          props: {
            trigger: 'More',
            triggerType: 'button',
            children: {
              key: null,
              ref: null,
              props: {
                children: {
                  key: null,
                  ref: null,
                  props: { children: 'Abraham Lincoln' },
                  _owner: null,
                },
              },
              _owner: null,
            },
            appearance: 'default',
            boundariesElement: 'viewport',
            defaultOpen: false,
            isLoading: false,
            isOpen: false,
            position: 'bottom left',
            isMenuFixed: false,
            shouldAllowMultilineItems: false,
            shouldFitContainer: false,
            shouldFlip: true,
          },
          _owner: null,
        },
      },
    ],
  },
  {
    key: 'row-16-Andrew Johnson',
    cells: [
      {
        key: 'AndrewJohnson',
        content: {
          key: null,
          ref: null,
          props: {
            children: [
              {
                key: null,
                ref: null,
                props: {
                  children: {
                    key: null,
                    ref: null,
                    props: {
                      name: 'Andrew Johnson',
                      size: 'medium',
                      src:
                        'https://api.adorable.io/avatars/24/Andrew%20Johnson.png',
                    },
                    _owner: null,
                  },
                },
                _owner: null,
              },
              {
                type: 'a',
                key: null,
                ref: null,
                props: {
                  href: 'https://atlassian.design',
                  children: 'Andrew Johnson',
                },
                _owner: null,
              },
            ],
          },
          _owner: null,
        },
      },
      { key: 'NationalUnion', content: 'National Union' },
      { key: 17, content: '1865-1869' },
      { content: 6 },
      {
        content: {
          key: null,
          ref: null,
          props: {
            trigger: 'More',
            triggerType: 'button',
            children: {
              key: null,
              ref: null,
              props: {
                children: {
                  key: null,
                  ref: null,
                  props: { children: 'Andrew Johnson' },
                  _owner: null,
                },
              },
              _owner: null,
            },
            appearance: 'default',
            boundariesElement: 'viewport',
            defaultOpen: false,
            isLoading: false,
            isOpen: false,
            position: 'bottom left',
            isMenuFixed: false,
            shouldAllowMultilineItems: false,
            shouldFitContainer: false,
            shouldFlip: true,
          },
          _owner: null,
        },
      },
    ],
  },
  {
    key: 'row-17-Ulysses S. Grant',
    cells: [
      {
        key: 'UlyssesS.Grant',
        content: {
          key: null,
          ref: null,
          props: {
            children: [
              {
                key: null,
                ref: null,
                props: {
                  children: {
                    key: null,
                    ref: null,
                    props: {
                      name: 'Ulysses S. Grant',
                      size: 'medium',
                      src:
                        'https://api.adorable.io/avatars/24/Ulysses%20S.%20Grant.png',
                    },
                    _owner: null,
                  },
                },
                _owner: null,
              },
              {
                type: 'a',
                key: null,
                ref: null,
                props: {
                  href: 'https://atlassian.design',
                  children: 'Ulysses S. Grant',
                },
                _owner: null,
              },
            ],
          },
          _owner: null,
        },
      },
      { key: 'Republican', content: 'Republican' },
      { key: 18, content: '1869-1877' },
      { content: 7 },
      {
        content: {
          key: null,
          ref: null,
          props: {
            trigger: 'More',
            triggerType: 'button',
            children: {
              key: null,
              ref: null,
              props: {
                children: {
                  key: null,
                  ref: null,
                  props: { children: 'Ulysses S. Grant' },
                  _owner: null,
                },
              },
              _owner: null,
            },
            appearance: 'default',
            boundariesElement: 'viewport',
            defaultOpen: false,
            isLoading: false,
            isOpen: false,
            position: 'bottom left',
            isMenuFixed: false,
            shouldAllowMultilineItems: false,
            shouldFitContainer: false,
            shouldFlip: true,
          },
          _owner: null,
        },
      },
    ],
  },
  {
    key: 'row-18-Rutherford Hayes',
    cells: [
      {
        key: 'RutherfordHayes',
        content: {
          key: null,
          ref: null,
          props: {
            children: [
              {
                key: null,
                ref: null,
                props: {
                  children: {
                    key: null,
                    ref: null,
                    props: {
                      name: 'Rutherford Hayes',
                      size: 'medium',
                      src:
                        'https://api.adorable.io/avatars/24/Rutherford%20Hayes.png',
                    },
                    _owner: null,
                  },
                },
                _owner: null,
              },
              {
                type: 'a',
                key: null,
                ref: null,
                props: {
                  href: 'https://atlassian.design',
                  children: 'Rutherford Hayes',
                },
                _owner: null,
              },
            ],
          },
          _owner: null,
        },
      },
      { key: 'Republican', content: 'Republican' },
      { key: 19, content: '1877-1881' },
      { content: 8 },
      {
        content: {
          key: null,
          ref: null,
          props: {
            trigger: 'More',
            triggerType: 'button',
            children: {
              key: null,
              ref: null,
              props: {
                children: {
                  key: null,
                  ref: null,
                  props: { children: 'Rutherford Hayes' },
                  _owner: null,
                },
              },
              _owner: null,
            },
            appearance: 'default',
            boundariesElement: 'viewport',
            defaultOpen: false,
            isLoading: false,
            isOpen: false,
            position: 'bottom left',
            isMenuFixed: false,
            shouldAllowMultilineItems: false,
            shouldFitContainer: false,
            shouldFlip: true,
          },
          _owner: null,
        },
      },
    ],
  },
  {
    key: 'row-19-James Garfield',
    cells: [
      {
        key: 'JamesGarfield',
        content: {
          key: null,
          ref: null,
          props: {
            children: [
              {
                key: null,
                ref: null,
                props: {
                  children: {
                    key: null,
                    ref: null,
                    props: {
                      name: 'James Garfield',
                      size: 'medium',
                      src:
                        'https://api.adorable.io/avatars/24/James%20Garfield.png',
                    },
                    _owner: null,
                  },
                },
                _owner: null,
              },
              {
                type: 'a',
                key: null,
                ref: null,
                props: {
                  href: 'https://atlassian.design',
                  children: 'James Garfield',
                },
                _owner: null,
              },
            ],
          },
          _owner: null,
        },
      },
      { key: 'Republican', content: 'Republican' },
      { key: 20, content: '1881' },
      { content: 9 },
      {
        content: {
          key: null,
          ref: null,
          props: {
            trigger: 'More',
            triggerType: 'button',
            children: {
              key: null,
              ref: null,
              props: {
                children: {
                  key: null,
                  ref: null,
                  props: { children: 'James Garfield' },
                  _owner: null,
                },
              },
              _owner: null,
            },
            appearance: 'default',
            boundariesElement: 'viewport',
            defaultOpen: false,
            isLoading: false,
            isOpen: false,
            position: 'bottom left',
            isMenuFixed: false,
            shouldAllowMultilineItems: false,
            shouldFitContainer: false,
            shouldFlip: true,
          },
          _owner: null,
        },
      },
    ],
  },
  {
    key: 'row-20-Chester Arthur',
    cells: [
      {
        key: 'ChesterArthur',
        content: {
          key: null,
          ref: null,
          props: {
            children: [
              {
                key: null,
                ref: null,
                props: {
                  children: {
                    key: null,
                    ref: null,
                    props: {
                      name: 'Chester Arthur',
                      size: 'medium',
                      src:
                        'https://api.adorable.io/avatars/24/Chester%20Arthur.png',
                    },
                    _owner: null,
                  },
                },
                _owner: null,
              },
              {
                type: 'a',
                key: null,
                ref: null,
                props: {
                  href: 'https://atlassian.design',
                  children: 'Chester Arthur',
                },
                _owner: null,
              },
            ],
          },
          _owner: null,
        },
      },
      { key: 'Republican', content: 'Republican' },
      { key: 21, content: '1881-1885' },
      { content: 10 },
      {
        content: {
          key: null,
          ref: null,
          props: {
            trigger: 'More',
            triggerType: 'button',
            children: {
              key: null,
              ref: null,
              props: {
                children: {
                  key: null,
                  ref: null,
                  props: { children: 'Chester Arthur' },
                  _owner: null,
                },
              },
              _owner: null,
            },
            appearance: 'default',
            boundariesElement: 'viewport',
            defaultOpen: false,
            isLoading: false,
            isOpen: false,
            position: 'bottom left',
            isMenuFixed: false,
            shouldAllowMultilineItems: false,
            shouldFitContainer: false,
            shouldFlip: true,
          },
          _owner: null,
        },
      },
    ],
  },
  {
    key: 'row-21-Grover Cleveland',
    cells: [
      {
        key: 'GroverCleveland',
        content: {
          key: null,
          ref: null,
          props: {
            children: [
              {
                key: null,
                ref: null,
                props: {
                  children: {
                    key: null,
                    ref: null,
                    props: {
                      name: 'Grover Cleveland',
                      size: 'medium',
                      src:
                        'https://api.adorable.io/avatars/24/Grover%20Cleveland.png',
                    },
                    _owner: null,
                  },
                },
                _owner: null,
              },
              {
                type: 'a',
                key: null,
                ref: null,
                props: {
                  href: 'https://atlassian.design',
                  children: 'Grover Cleveland',
                },
                _owner: null,
              },
            ],
          },
          _owner: null,
        },
      },
      { key: 'Democrat', content: 'Democrat' },
      { key: 22, content: '1885-1889' },
      { content: 11 },
      {
        content: {
          key: null,
          ref: null,
          props: {
            trigger: 'More',
            triggerType: 'button',
            children: {
              key: null,
              ref: null,
              props: {
                children: {
                  key: null,
                  ref: null,
                  props: { children: 'Grover Cleveland' },
                  _owner: null,
                },
              },
              _owner: null,
            },
            appearance: 'default',
            boundariesElement: 'viewport',
            defaultOpen: false,
            isLoading: false,
            isOpen: false,
            position: 'bottom left',
            isMenuFixed: false,
            shouldAllowMultilineItems: false,
            shouldFitContainer: false,
            shouldFlip: true,
          },
          _owner: null,
        },
      },
    ],
  },
  {
    key: 'row-22-Benjamin Harrison',
    cells: [
      {
        key: 'BenjaminHarrison',
        content: {
          key: null,
          ref: null,
          props: {
            children: [
              {
                key: null,
                ref: null,
                props: {
                  children: {
                    key: null,
                    ref: null,
                    props: {
                      name: 'Benjamin Harrison',
                      size: 'medium',
                      src:
                        'https://api.adorable.io/avatars/24/Benjamin%20Harrison.png',
                    },
                    _owner: null,
                  },
                },
                _owner: null,
              },
              {
                type: 'a',
                key: null,
                ref: null,
                props: {
                  href: 'https://atlassian.design',
                  children: 'Benjamin Harrison',
                },
                _owner: null,
              },
            ],
          },
          _owner: null,
        },
      },
      { key: 'Republican', content: 'Republican' },
      { key: 23, content: '1889-1893' },
      { content: 12 },
      {
        content: {
          key: null,
          ref: null,
          props: {
            trigger: 'More',
            triggerType: 'button',
            children: {
              key: null,
              ref: null,
              props: {
                children: {
                  key: null,
                  ref: null,
                  props: { children: 'Benjamin Harrison' },
                  _owner: null,
                },
              },
              _owner: null,
            },
            appearance: 'default',
            boundariesElement: 'viewport',
            defaultOpen: false,
            isLoading: false,
            isOpen: false,
            position: 'bottom left',
            isMenuFixed: false,
            shouldAllowMultilineItems: false,
            shouldFitContainer: false,
            shouldFlip: true,
          },
          _owner: null,
        },
      },
    ],
  },
  {
    key: 'row-23-Grover Cleveland',
    cells: [
      {
        key: 'GroverCleveland',
        content: {
          key: null,
          ref: null,
          props: {
            children: [
              {
                key: null,
                ref: null,
                props: {
                  children: {
                    key: null,
                    ref: null,
                    props: {
                      name: 'Grover Cleveland',
                      size: 'medium',
                      src:
                        'https://api.adorable.io/avatars/24/Grover%20Cleveland.png',
                    },
                    _owner: null,
                  },
                },
                _owner: null,
              },
              {
                type: 'a',
                key: null,
                ref: null,
                props: {
                  href: 'https://atlassian.design',
                  children: 'Grover Cleveland',
                },
                _owner: null,
              },
            ],
          },
          _owner: null,
        },
      },
      { key: 'Democrat', content: 'Democrat' },
      { key: 24, content: '1893-1897' },
      { content: 13 },
      {
        content: {
          key: null,
          ref: null,
          props: {
            trigger: 'More',
            triggerType: 'button',
            children: {
              key: null,
              ref: null,
              props: {
                children: {
                  key: null,
                  ref: null,
                  props: { children: 'Grover Cleveland' },
                  _owner: null,
                },
              },
              _owner: null,
            },
            appearance: 'default',
            boundariesElement: 'viewport',
            defaultOpen: false,
            isLoading: false,
            isOpen: false,
            position: 'bottom left',
            isMenuFixed: false,
            shouldAllowMultilineItems: false,
            shouldFitContainer: false,
            shouldFlip: true,
          },
          _owner: null,
        },
      },
    ],
  },
  {
    key: 'row-24-William McKinley',
    cells: [
      {
        key: 'WilliamMcKinley',
        content: {
          key: null,
          ref: null,
          props: {
            children: [
              {
                key: null,
                ref: null,
                props: {
                  children: {
                    key: null,
                    ref: null,
                    props: {
                      name: 'William McKinley',
                      size: 'medium',
                      src:
                        'https://api.adorable.io/avatars/24/William%20McKinley.png',
                    },
                    _owner: null,
                  },
                },
                _owner: null,
              },
              {
                type: 'a',
                key: null,
                ref: null,
                props: {
                  href: 'https://atlassian.design',
                  children: 'William McKinley',
                },
                _owner: null,
              },
            ],
          },
          _owner: null,
        },
      },
      { key: 'Republican', content: 'Republican' },
      { key: 25, content: '1897-1901' },
      { content: 14 },
      {
        content: {
          key: null,
          ref: null,
          props: {
            trigger: 'More',
            triggerType: 'button',
            children: {
              key: null,
              ref: null,
              props: {
                children: {
                  key: null,
                  ref: null,
                  props: { children: 'William McKinley' },
                  _owner: null,
                },
              },
              _owner: null,
            },
            appearance: 'default',
            boundariesElement: 'viewport',
            defaultOpen: false,
            isLoading: false,
            isOpen: false,
            position: 'bottom left',
            isMenuFixed: false,
            shouldAllowMultilineItems: false,
            shouldFitContainer: false,
            shouldFlip: true,
          },
          _owner: null,
        },
      },
    ],
  },
  {
    key: 'row-25-Theodore Roosevelt',
    cells: [
      {
        key: 'TheodoreRoosevelt',
        content: {
          key: null,
          ref: null,
          props: {
            children: [
              {
                key: null,
                ref: null,
                props: {
                  children: {
                    key: null,
                    ref: null,
                    props: {
                      name: 'Theodore Roosevelt',
                      size: 'medium',
                      src:
                        'https://api.adorable.io/avatars/24/Theodore%20Roosevelt.png',
                    },
                    _owner: null,
                  },
                },
                _owner: null,
              },
              {
                type: 'a',
                key: null,
                ref: null,
                props: {
                  href: 'https://atlassian.design',
                  children: 'Theodore Roosevelt',
                },
                _owner: null,
              },
            ],
          },
          _owner: null,
        },
      },
      { key: 'Republican', content: 'Republican' },
      { key: 26, content: '1901-1909' },
      { content: 15 },
      {
        content: {
          key: null,
          ref: null,
          props: {
            trigger: 'More',
            triggerType: 'button',
            children: {
              key: null,
              ref: null,
              props: {
                children: {
                  key: null,
                  ref: null,
                  props: { children: 'Theodore Roosevelt' },
                  _owner: null,
                },
              },
              _owner: null,
            },
            appearance: 'default',
            boundariesElement: 'viewport',
            defaultOpen: false,
            isLoading: false,
            isOpen: false,
            position: 'bottom left',
            isMenuFixed: false,
            shouldAllowMultilineItems: false,
            shouldFitContainer: false,
            shouldFlip: true,
          },
          _owner: null,
        },
      },
    ],
  },
  {
    key: 'row-26-William Taft',
    cells: [
      {
        key: 'WilliamTaft',
        content: {
          key: null,
          ref: null,
          props: {
            children: [
              {
                key: null,
                ref: null,
                props: {
                  children: {
                    key: null,
                    ref: null,
                    props: {
                      name: 'William Taft',
                      size: 'medium',
                      src:
                        'https://api.adorable.io/avatars/24/William%20Taft.png',
                    },
                    _owner: null,
                  },
                },
                _owner: null,
              },
              {
                type: 'a',
                key: null,
                ref: null,
                props: {
                  href: 'https://atlassian.design',
                  children: 'William Taft',
                },
                _owner: null,
              },
            ],
          },
          _owner: null,
        },
      },
      { key: 'Republican', content: 'Republican' },
      { key: 27, content: '1909-1913' },
      { content: 16 },
      {
        content: {
          key: null,
          ref: null,
          props: {
            trigger: 'More',
            triggerType: 'button',
            children: {
              key: null,
              ref: null,
              props: {
                children: {
                  key: null,
                  ref: null,
                  props: { children: 'William Taft' },
                  _owner: null,
                },
              },
              _owner: null,
            },
            appearance: 'default',
            boundariesElement: 'viewport',
            defaultOpen: false,
            isLoading: false,
            isOpen: false,
            position: 'bottom left',
            isMenuFixed: false,
            shouldAllowMultilineItems: false,
            shouldFitContainer: false,
            shouldFlip: true,
          },
          _owner: null,
        },
      },
    ],
  },
  {
    key: 'row-27-Woodrow Wilson',
    cells: [
      {
        key: 'WoodrowWilson',
        content: {
          key: null,
          ref: null,
          props: {
            children: [
              {
                key: null,
                ref: null,
                props: {
                  children: {
                    key: null,
                    ref: null,
                    props: {
                      name: 'Woodrow Wilson',
                      size: 'medium',
                      src:
                        'https://api.adorable.io/avatars/24/Woodrow%20Wilson.png',
                    },
                    _owner: null,
                  },
                },
                _owner: null,
              },
              {
                type: 'a',
                key: null,
                ref: null,
                props: {
                  href: 'https://atlassian.design',
                  children: 'Woodrow Wilson',
                },
                _owner: null,
              },
            ],
          },
          _owner: null,
        },
      },
      { key: 'Democrat', content: 'Democrat' },
      { key: 28, content: '1913-1921' },
      { content: 17 },
      {
        content: {
          key: null,
          ref: null,
          props: {
            trigger: 'More',
            triggerType: 'button',
            children: {
              key: null,
              ref: null,
              props: {
                children: {
                  key: null,
                  ref: null,
                  props: { children: 'Woodrow Wilson' },
                  _owner: null,
                },
              },
              _owner: null,
            },
            appearance: 'default',
            boundariesElement: 'viewport',
            defaultOpen: false,
            isLoading: false,
            isOpen: false,
            position: 'bottom left',
            isMenuFixed: false,
            shouldAllowMultilineItems: false,
            shouldFitContainer: false,
            shouldFlip: true,
          },
          _owner: null,
        },
      },
    ],
  },
  {
    key: 'row-28-Warren Harding',
    cells: [
      {
        key: 'WarrenHarding',
        content: {
          key: null,
          ref: null,
          props: {
            children: [
              {
                key: null,
                ref: null,
                props: {
                  children: {
                    key: null,
                    ref: null,
                    props: {
                      name: 'Warren Harding',
                      size: 'medium',
                      src:
                        'https://api.adorable.io/avatars/24/Warren%20Harding.png',
                    },
                    _owner: null,
                  },
                },
                _owner: null,
              },
              {
                type: 'a',
                key: null,
                ref: null,
                props: {
                  href: 'https://atlassian.design',
                  children: 'Warren Harding',
                },
                _owner: null,
              },
            ],
          },
          _owner: null,
        },
      },
      { key: 'Republican', content: 'Republican' },
      { key: 29, content: '1921-1923' },
      { content: 18 },
      {
        content: {
          key: null,
          ref: null,
          props: {
            trigger: 'More',
            triggerType: 'button',
            children: {
              key: null,
              ref: null,
              props: {
                children: {
                  key: null,
                  ref: null,
                  props: { children: 'Warren Harding' },
                  _owner: null,
                },
              },
              _owner: null,
            },
            appearance: 'default',
            boundariesElement: 'viewport',
            defaultOpen: false,
            isLoading: false,
            isOpen: false,
            position: 'bottom left',
            isMenuFixed: false,
            shouldAllowMultilineItems: false,
            shouldFitContainer: false,
            shouldFlip: true,
          },
          _owner: null,
        },
      },
    ],
  },
  {
    key: 'row-29-Calvin Coolidge',
    cells: [
      {
        key: 'CalvinCoolidge',
        content: {
          key: null,
          ref: null,
          props: {
            children: [
              {
                key: null,
                ref: null,
                props: {
                  children: {
                    key: null,
                    ref: null,
                    props: {
                      name: 'Calvin Coolidge',
                      size: 'medium',
                      src:
                        'https://api.adorable.io/avatars/24/Calvin%20Coolidge.png',
                    },
                    _owner: null,
                  },
                },
                _owner: null,
              },
              {
                type: 'a',
                key: null,
                ref: null,
                props: {
                  href: 'https://atlassian.design',
                  children: 'Calvin Coolidge',
                },
                _owner: null,
              },
            ],
          },
          _owner: null,
        },
      },
      { key: 'Republican', content: 'Republican' },
      { key: 30, content: '1923-1929' },
      { content: 19 },
      {
        content: {
          key: null,
          ref: null,
          props: {
            trigger: 'More',
            triggerType: 'button',
            children: {
              key: null,
              ref: null,
              props: {
                children: {
                  key: null,
                  ref: null,
                  props: { children: 'Calvin Coolidge' },
                  _owner: null,
                },
              },
              _owner: null,
            },
            appearance: 'default',
            boundariesElement: 'viewport',
            defaultOpen: false,
            isLoading: false,
            isOpen: false,
            position: 'bottom left',
            isMenuFixed: false,
            shouldAllowMultilineItems: false,
            shouldFitContainer: false,
            shouldFlip: true,
          },
          _owner: null,
        },
      },
    ],
  },
  {
    key: 'row-30-Herbert C. Hoover',
    cells: [
      {
        key: 'HerbertC.Hoover',
        content: {
          key: null,
          ref: null,
          props: {
            children: [
              {
                key: null,
                ref: null,
                props: {
                  children: {
                    key: null,
                    ref: null,
                    props: {
                      name: 'Herbert C. Hoover',
                      size: 'medium',
                      src:
                        'https://api.adorable.io/avatars/24/Herbert%20C.%20Hoover.png',
                    },
                    _owner: null,
                  },
                },
                _owner: null,
              },
              {
                type: 'a',
                key: null,
                ref: null,
                props: {
                  href: 'https://atlassian.design',
                  children: 'Herbert C. Hoover',
                },
                _owner: null,
              },
            ],
          },
          _owner: null,
        },
      },
      { key: 'Republican', content: 'Republican' },
      { key: 31, content: '1929-1933' },
      { content: 20 },
      {
        content: {
          key: null,
          ref: null,
          props: {
            trigger: 'More',
            triggerType: 'button',
            children: {
              key: null,
              ref: null,
              props: {
                children: {
                  key: null,
                  ref: null,
                  props: { children: 'Herbert C. Hoover' },
                  _owner: null,
                },
              },
              _owner: null,
            },
            appearance: 'default',
            boundariesElement: 'viewport',
            defaultOpen: false,
            isLoading: false,
            isOpen: false,
            position: 'bottom left',
            isMenuFixed: false,
            shouldAllowMultilineItems: false,
            shouldFitContainer: false,
            shouldFlip: true,
          },
          _owner: null,
        },
      },
    ],
  },
  {
    key: 'row-31-Franklin Delano Roosevelt',
    cells: [
      {
        key: 'FranklinDelanoRoosevelt',
        content: {
          key: null,
          ref: null,
          props: {
            children: [
              {
                key: null,
                ref: null,
                props: {
                  children: {
                    key: null,
                    ref: null,
                    props: {
                      name: 'Franklin Delano Roosevelt',
                      size: 'medium',
                      src:
                        'https://api.adorable.io/avatars/24/Franklin%20Delano%20Roosevelt.png',
                    },
                    _owner: null,
                  },
                },
                _owner: null,
              },
              {
                type: 'a',
                key: null,
                ref: null,
                props: {
                  href: 'https://atlassian.design',
                  children: 'Franklin Delano Roosevelt',
                },
                _owner: null,
              },
            ],
          },
          _owner: null,
        },
      },
      { key: 'Democrat', content: 'Democrat' },
      { key: 32, content: '1933-1945' },
      { content: 21 },
      {
        content: {
          key: null,
          ref: null,
          props: {
            trigger: 'More',
            triggerType: 'button',
            children: {
              key: null,
              ref: null,
              props: {
                children: {
                  key: null,
                  ref: null,
                  props: { children: 'Franklin Delano Roosevelt' },
                  _owner: null,
                },
              },
              _owner: null,
            },
            appearance: 'default',
            boundariesElement: 'viewport',
            defaultOpen: false,
            isLoading: false,
            isOpen: false,
            position: 'bottom left',
            isMenuFixed: false,
            shouldAllowMultilineItems: false,
            shouldFitContainer: false,
            shouldFlip: true,
          },
          _owner: null,
        },
      },
    ],
  },
  {
    key: 'row-32-Harry S Truman',
    cells: [
      {
        key: 'HarrySTruman',
        content: {
          key: null,
          ref: null,
          props: {
            children: [
              {
                key: null,
                ref: null,
                props: {
                  children: {
                    key: null,
                    ref: null,
                    props: {
                      name: 'Harry S Truman',
                      size: 'medium',
                      src:
                        'https://api.adorable.io/avatars/24/Harry%20S%20Truman.png',
                    },
                    _owner: null,
                  },
                },
                _owner: null,
              },
              {
                type: 'a',
                key: null,
                ref: null,
                props: {
                  href: 'https://atlassian.design',
                  children: 'Harry S Truman',
                },
                _owner: null,
              },
            ],
          },
          _owner: null,
        },
      },
      { key: 'Democrat', content: 'Democrat' },
      { key: 33, content: '1945-1953' },
      { content: 22 },
      {
        content: {
          key: null,
          ref: null,
          props: {
            trigger: 'More',
            triggerType: 'button',
            children: {
              key: null,
              ref: null,
              props: {
                children: {
                  key: null,
                  ref: null,
                  props: { children: 'Harry S Truman' },
                  _owner: null,
                },
              },
              _owner: null,
            },
            appearance: 'default',
            boundariesElement: 'viewport',
            defaultOpen: false,
            isLoading: false,
            isOpen: false,
            position: 'bottom left',
            isMenuFixed: false,
            shouldAllowMultilineItems: false,
            shouldFitContainer: false,
            shouldFlip: true,
          },
          _owner: null,
        },
      },
    ],
  },
  {
    key: 'row-33-Dwight David Eisenhower',
    cells: [
      {
        key: 'DwightDavidEisenhower',
        content: {
          key: null,
          ref: null,
          props: {
            children: [
              {
                key: null,
                ref: null,
                props: {
                  children: {
                    key: null,
                    ref: null,
                    props: {
                      name: 'Dwight David Eisenhower',
                      size: 'medium',
                      src:
                        'https://api.adorable.io/avatars/24/Dwight%20David%20Eisenhower.png',
                    },
                    _owner: null,
                  },
                },
                _owner: null,
              },
              {
                type: 'a',
                key: null,
                ref: null,
                props: {
                  href: 'https://atlassian.design',
                  children: 'Dwight David Eisenhower',
                },
                _owner: null,
              },
            ],
          },
          _owner: null,
        },
      },
      { key: 'Republican', content: 'Republican' },
      { key: 34, content: '1953-1961' },
      { content: 23 },
      {
        content: {
          key: null,
          ref: null,
          props: {
            trigger: 'More',
            triggerType: 'button',
            children: {
              key: null,
              ref: null,
              props: {
                children: {
                  key: null,
                  ref: null,
                  props: { children: 'Dwight David Eisenhower' },
                  _owner: null,
                },
              },
              _owner: null,
            },
            appearance: 'default',
            boundariesElement: 'viewport',
            defaultOpen: false,
            isLoading: false,
            isOpen: false,
            position: 'bottom left',
            isMenuFixed: false,
            shouldAllowMultilineItems: false,
            shouldFitContainer: false,
            shouldFlip: true,
          },
          _owner: null,
        },
      },
    ],
  },
  {
    key: 'row-34-John Fitzgerald Kennedy',
    cells: [
      {
        key: 'JohnFitzgeraldKennedy',
        content: {
          key: null,
          ref: null,
          props: {
            children: [
              {
                key: null,
                ref: null,
                props: {
                  children: {
                    key: null,
                    ref: null,
                    props: {
                      name: 'John Fitzgerald Kennedy',
                      size: 'medium',
                      src:
                        'https://api.adorable.io/avatars/24/John%20Fitzgerald%20Kennedy.png',
                    },
                    _owner: null,
                  },
                },
                _owner: null,
              },
              {
                type: 'a',
                key: null,
                ref: null,
                props: {
                  href: 'https://atlassian.design',
                  children: 'John Fitzgerald Kennedy',
                },
                _owner: null,
              },
            ],
          },
          _owner: null,
        },
      },
      { key: 'Democrat', content: 'Democrat' },
      { key: 35, content: '1961-1963' },
      { content: 24 },
      {
        content: {
          key: null,
          ref: null,
          props: {
            trigger: 'More',
            triggerType: 'button',
            children: {
              key: null,
              ref: null,
              props: {
                children: {
                  key: null,
                  ref: null,
                  props: { children: 'John Fitzgerald Kennedy' },
                  _owner: null,
                },
              },
              _owner: null,
            },
            appearance: 'default',
            boundariesElement: 'viewport',
            defaultOpen: false,
            isLoading: false,
            isOpen: false,
            position: 'bottom left',
            isMenuFixed: false,
            shouldAllowMultilineItems: false,
            shouldFitContainer: false,
            shouldFlip: true,
          },
          _owner: null,
        },
      },
    ],
  },
  {
    key: 'row-35-Lyndon Baines Johnson',
    cells: [
      {
        key: 'LyndonBainesJohnson',
        content: {
          key: null,
          ref: null,
          props: {
            children: [
              {
                key: null,
                ref: null,
                props: {
                  children: {
                    key: null,
                    ref: null,
                    props: {
                      name: 'Lyndon Baines Johnson',
                      size: 'medium',
                      src:
                        'https://api.adorable.io/avatars/24/Lyndon%20Baines%20Johnson.png',
                    },
                    _owner: null,
                  },
                },
                _owner: null,
              },
              {
                type: 'a',
                key: null,
                ref: null,
                props: {
                  href: 'https://atlassian.design',
                  children: 'Lyndon Baines Johnson',
                },
                _owner: null,
              },
            ],
          },
          _owner: null,
        },
      },
      { key: 'Democrat', content: 'Democrat' },
      { key: 36, content: '1963-1969' },
      { content: 25 },
      {
        content: {
          key: null,
          ref: null,
          props: {
            trigger: 'More',
            triggerType: 'button',
            children: {
              key: null,
              ref: null,
              props: {
                children: {
                  key: null,
                  ref: null,
                  props: { children: 'Lyndon Baines Johnson' },
                  _owner: null,
                },
              },
              _owner: null,
            },
            appearance: 'default',
            boundariesElement: 'viewport',
            defaultOpen: false,
            isLoading: false,
            isOpen: false,
            position: 'bottom left',
            isMenuFixed: false,
            shouldAllowMultilineItems: false,
            shouldFitContainer: false,
            shouldFlip: true,
          },
          _owner: null,
        },
      },
    ],
  },
  {
    key: 'row-36-Richard Milhous Nixon',
    cells: [
      {
        key: 'RichardMilhousNixon',
        content: {
          key: null,
          ref: null,
          props: {
            children: [
              {
                key: null,
                ref: null,
                props: {
                  children: {
                    key: null,
                    ref: null,
                    props: {
                      name: 'Richard Milhous Nixon',
                      size: 'medium',
                      src:
                        'https://api.adorable.io/avatars/24/Richard%20Milhous%20Nixon.png',
                    },
                    _owner: null,
                  },
                },
                _owner: null,
              },
              {
                type: 'a',
                key: null,
                ref: null,
                props: {
                  href: 'https://atlassian.design',
                  children: 'Richard Milhous Nixon',
                },
                _owner: null,
              },
            ],
          },
          _owner: null,
        },
      },
      { key: 'Republican', content: 'Republican' },
      { key: 37, content: '1969-1974' },
      { content: 26 },
      {
        content: {
          key: null,
          ref: null,
          props: {
            trigger: 'More',
            triggerType: 'button',
            children: {
              key: null,
              ref: null,
              props: {
                children: {
                  key: null,
                  ref: null,
                  props: { children: 'Richard Milhous Nixon' },
                  _owner: null,
                },
              },
              _owner: null,
            },
            appearance: 'default',
            boundariesElement: 'viewport',
            defaultOpen: false,
            isLoading: false,
            isOpen: false,
            position: 'bottom left',
            isMenuFixed: false,
            shouldAllowMultilineItems: false,
            shouldFitContainer: false,
            shouldFlip: true,
          },
          _owner: null,
        },
      },
    ],
  },
  {
    key: 'row-37-Gerald R. Ford',
    cells: [
      {
        key: 'GeraldR.Ford',
        content: {
          key: null,
          ref: null,
          props: {
            children: [
              {
                key: null,
                ref: null,
                props: {
                  children: {
                    key: null,
                    ref: null,
                    props: {
                      name: 'Gerald R. Ford',
                      size: 'medium',
                      src:
                        'https://api.adorable.io/avatars/24/Gerald%20R.%20Ford.png',
                    },
                    _owner: null,
                  },
                },
                _owner: null,
              },
              {
                type: 'a',
                key: null,
                ref: null,
                props: {
                  href: 'https://atlassian.design',
                  children: 'Gerald R. Ford',
                },
                _owner: null,
              },
            ],
          },
          _owner: null,
        },
      },
      { key: 'Republican', content: 'Republican' },
      { key: 38, content: '1974-1977' },
      { content: 27 },
      {
        content: {
          key: null,
          ref: null,
          props: {
            trigger: 'More',
            triggerType: 'button',
            children: {
              key: null,
              ref: null,
              props: {
                children: {
                  key: null,
                  ref: null,
                  props: { children: 'Gerald R. Ford' },
                  _owner: null,
                },
              },
              _owner: null,
            },
            appearance: 'default',
            boundariesElement: 'viewport',
            defaultOpen: false,
            isLoading: false,
            isOpen: false,
            position: 'bottom left',
            isMenuFixed: false,
            shouldAllowMultilineItems: false,
            shouldFitContainer: false,
            shouldFlip: true,
          },
          _owner: null,
        },
      },
    ],
  },
  {
    key: 'row-38-Jimmy Carter',
    cells: [
      {
        key: 'JimmyCarter',
        content: {
          key: null,
          ref: null,
          props: {
            children: [
              {
                key: null,
                ref: null,
                props: {
                  children: {
                    key: null,
                    ref: null,
                    props: {
                      name: 'Jimmy Carter',
                      size: 'medium',
                      src:
                        'https://api.adorable.io/avatars/24/Jimmy%20Carter.png',
                    },
                    _owner: null,
                  },
                },
                _owner: null,
              },
              {
                type: 'a',
                key: null,
                ref: null,
                props: {
                  href: 'https://atlassian.design',
                  children: 'Jimmy Carter',
                },
                _owner: null,
              },
            ],
          },
          _owner: null,
        },
      },
      { key: 'Democrat', content: 'Democrat' },
      { key: 39, content: '1977-1981' },
      { content: 28 },
      {
        content: {
          key: null,
          ref: null,
          props: {
            trigger: 'More',
            triggerType: 'button',
            children: {
              key: null,
              ref: null,
              props: {
                children: {
                  key: null,
                  ref: null,
                  props: { children: 'Jimmy Carter' },
                  _owner: null,
                },
              },
              _owner: null,
            },
            appearance: 'default',
            boundariesElement: 'viewport',
            defaultOpen: false,
            isLoading: false,
            isOpen: false,
            position: 'bottom left',
            isMenuFixed: false,
            shouldAllowMultilineItems: false,
            shouldFitContainer: false,
            shouldFlip: true,
          },
          _owner: null,
        },
      },
    ],
  },
  {
    key: 'row-39-Ronald Wilson Reagan',
    cells: [
      {
        key: 'RonaldWilsonReagan',
        content: {
          key: null,
          ref: null,
          props: {
            children: [
              {
                key: null,
                ref: null,
                props: {
                  children: {
                    key: null,
                    ref: null,
                    props: {
                      name: 'Ronald Wilson Reagan',
                      size: 'medium',
                      src:
                        'https://api.adorable.io/avatars/24/Ronald%20Wilson%20Reagan.png',
                    },
                    _owner: null,
                  },
                },
                _owner: null,
              },
              {
                type: 'a',
                key: null,
                ref: null,
                props: {
                  href: 'https://atlassian.design',
                  children: 'Ronald Wilson Reagan',
                },
                _owner: null,
              },
            ],
          },
          _owner: null,
        },
      },
      { key: 'Republican', content: 'Republican' },
      { key: 40, content: '1981-1989' },
      { content: 29 },
      {
        content: {
          key: null,
          ref: null,
          props: {
            trigger: 'More',
            triggerType: 'button',
            children: {
              key: null,
              ref: null,
              props: {
                children: {
                  key: null,
                  ref: null,
                  props: { children: 'Ronald Wilson Reagan' },
                  _owner: null,
                },
              },
              _owner: null,
            },
            appearance: 'default',
            boundariesElement: 'viewport',
            defaultOpen: false,
            isLoading: false,
            isOpen: false,
            position: 'bottom left',
            isMenuFixed: false,
            shouldAllowMultilineItems: false,
            shouldFitContainer: false,
            shouldFlip: true,
          },
          _owner: null,
        },
      },
    ],
  },
  {
    key: 'row-40-George H. W. Bush',
    cells: [
      {
        key: 'GeorgeH.W.Bush',
        content: {
          key: null,
          ref: null,
          props: {
            children: [
              {
                key: null,
                ref: null,
                props: {
                  children: {
                    key: null,
                    ref: null,
                    props: {
                      name: 'George H. W. Bush',
                      size: 'medium',
                      src:
                        'https://api.adorable.io/avatars/24/George%20H.%20W.%20Bush.png',
                    },
                    _owner: null,
                  },
                },
                _owner: null,
              },
              {
                type: 'a',
                key: null,
                ref: null,
                props: {
                  href: 'https://atlassian.design',
                  children: 'George H. W. Bush',
                },
                _owner: null,
              },
            ],
          },
          _owner: null,
        },
      },
      { key: 'Republican', content: 'Republican' },
      { key: 41, content: '1989-1993' },
      { content: 30 },
      {
        content: {
          key: null,
          ref: null,
          props: {
            trigger: 'More',
            triggerType: 'button',
            children: {
              key: null,
              ref: null,
              props: {
                children: {
                  key: null,
                  ref: null,
                  props: { children: 'George H. W. Bush' },
                  _owner: null,
                },
              },
              _owner: null,
            },
            appearance: 'default',
            boundariesElement: 'viewport',
            defaultOpen: false,
            isLoading: false,
            isOpen: false,
            position: 'bottom left',
            isMenuFixed: false,
            shouldAllowMultilineItems: false,
            shouldFitContainer: false,
            shouldFlip: true,
          },
          _owner: null,
        },
      },
    ],
  },
  {
    key: 'row-41-Bill Clinton',
    cells: [
      {
        key: 'BillClinton',
        content: {
          key: null,
          ref: null,
          props: {
            children: [
              {
                key: null,
                ref: null,
                props: {
                  children: {
                    key: null,
                    ref: null,
                    props: {
                      name: 'Bill Clinton',
                      size: 'medium',
                      src:
                        'https://api.adorable.io/avatars/24/Bill%20Clinton.png',
                    },
                    _owner: null,
                  },
                },
                _owner: null,
              },
              {
                type: 'a',
                key: null,
                ref: null,
                props: {
                  href: 'https://atlassian.design',
                  children: 'Bill Clinton',
                },
                _owner: null,
              },
            ],
          },
          _owner: null,
        },
      },
      { key: 'Democrat', content: 'Democrat' },
      { key: 42, content: '1993-2001' },
      { content: 31 },
      {
        content: {
          key: null,
          ref: null,
          props: {
            trigger: 'More',
            triggerType: 'button',
            children: {
              key: null,
              ref: null,
              props: {
                children: {
                  key: null,
                  ref: null,
                  props: { children: 'Bill Clinton' },
                  _owner: null,
                },
              },
              _owner: null,
            },
            appearance: 'default',
            boundariesElement: 'viewport',
            defaultOpen: false,
            isLoading: false,
            isOpen: false,
            position: 'bottom left',
            isMenuFixed: false,
            shouldAllowMultilineItems: false,
            shouldFitContainer: false,
            shouldFlip: true,
          },
          _owner: null,
        },
      },
    ],
  },
  {
    key: 'row-42-George W. Bush',
    cells: [
      {
        key: 'GeorgeW.Bush',
        content: {
          key: null,
          ref: null,
          props: {
            children: [
              {
                key: null,
                ref: null,
                props: {
                  children: {
                    key: null,
                    ref: null,
                    props: {
                      name: 'George W. Bush',
                      size: 'medium',
                      src:
                        'https://api.adorable.io/avatars/24/George%20W.%20Bush.png',
                    },
                    _owner: null,
                  },
                },
                _owner: null,
              },
              {
                type: 'a',
                key: null,
                ref: null,
                props: {
                  href: 'https://atlassian.design',
                  children: 'George W. Bush',
                },
                _owner: null,
              },
            ],
          },
          _owner: null,
        },
      },
      { key: 'Republican', content: 'Republican' },
      { key: 43, content: '2001-2009' },
      { content: 32 },
      {
        content: {
          key: null,
          ref: null,
          props: {
            trigger: 'More',
            triggerType: 'button',
            children: {
              key: null,
              ref: null,
              props: {
                children: {
                  key: null,
                  ref: null,
                  props: { children: 'George W. Bush' },
                  _owner: null,
                },
              },
              _owner: null,
            },
            appearance: 'default',
            boundariesElement: 'viewport',
            defaultOpen: false,
            isLoading: false,
            isOpen: false,
            position: 'bottom left',
            isMenuFixed: false,
            shouldAllowMultilineItems: false,
            shouldFitContainer: false,
            shouldFlip: true,
          },
          _owner: null,
        },
      },
    ],
  },
  {
    key: 'row-43-Barack Obama',
    cells: [
      {
        key: 'BarackObama',
        content: {
          key: null,
          ref: null,
          props: {
            children: [
              {
                key: null,
                ref: null,
                props: {
                  children: {
                    key: null,
                    ref: null,
                    props: {
                      name: 'Barack Obama',
                      size: 'medium',
                      src:
                        'https://api.adorable.io/avatars/24/Barack%20Obama.png',
                    },
                    _owner: null,
                  },
                },
                _owner: null,
              },
              {
                type: 'a',
                key: null,
                ref: null,
                props: {
                  href: 'https://atlassian.design',
                  children: 'Barack Obama',
                },
                _owner: null,
              },
            ],
          },
          _owner: null,
        },
      },
      { key: 'Democrat', content: 'Democrat' },
      { key: 44, content: '2009-2016' },
      { content: 33 },
      {
        content: {
          key: null,
          ref: null,
          props: {
            trigger: 'More',
            triggerType: 'button',
            children: {
              key: null,
              ref: null,
              props: {
                children: {
                  key: null,
                  ref: null,
                  props: { children: 'Barack Obama' },
                  _owner: null,
                },
              },
              _owner: null,
            },
            appearance: 'default',
            boundariesElement: 'viewport',
            defaultOpen: false,
            isLoading: false,
            isOpen: false,
            position: 'bottom left',
            isMenuFixed: false,
            shouldAllowMultilineItems: false,
            shouldFitContainer: false,
            shouldFlip: true,
          },
          _owner: null,
        },
      },
    ],
  },
];

const head = {
  cells: [
    { key: 'name', content: 'Name', isSortable: true, width: 25 },
    {
      key: 'party',
      content: 'Party',
      shouldTruncate: true,
      isSortable: true,
      width: 15,
    },
    {
      key: 'term',
      content: 'Term',
      shouldTruncate: true,
      isSortable: true,
      width: 10,
    },
    { key: 'content', content: 'Comment', shouldTruncate: true },
    { key: 'more', shouldTruncate: true },
  ],
};

export const DashboardPage: NextPage<LoginPageProps> = () => {
  return (
    <NavigationProvider>
      <LayoutManager
        globalNavigation={Global}
        productNavigation={() => null}
        containerNavigation={() => null}
      >
        <div css={{ padding: '32px 40px' }}>
          <DynamicTable
            caption={'test'}
            head={head}
            rows={rows}
            rowsPerPage={10}
            defaultPage={1}
            loadingSpinnerSize="large"
            isLoading={false}
            isFixedSize
            defaultSortKey="term"
            defaultSortOrder="ASC"
            onSort={() => console.log('onSort')}
            onSetPage={() => console.log('onSetPage')}
          />
        </div>
      </LayoutManager>
    </NavigationProvider>
  );
};

export default DashboardPage;
