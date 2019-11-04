const base = '/';
const components = base + 'components/';
const charts = base + 'charts/';

const navItems = [{
  id: 1,
  icon: 'Home',
  label: 'Home',
  url: base
}, {
  id: 2,
  icon: 'Palette',
  label: 'Colors',
  url: base + 'colors'
}, {
  id: 3,
  icon: 'Widgets',
  label: 'Components',
  url: base + 'components',
  subIcon: 'NavigateNext',
  open: false,
  subNavItems: [{
    id: 1,
    label: 'Button',
    url: components + 'button'
  }, {
    id: 2,
    label: 'Date',
    url: components + 'date'
  }, {
    id: 3,
    label: 'Slider',
    url: components + 'slider'
  }, {
    id: 4,
    label: 'Menu',
    url: components + 'menu'
  }, {
    id: 5,
    label: 'Tab',
    url: components + 'tab'
  }, {
    id: 6,
    label: 'AppBar',
    url: components + 'appbar'
  }, {
    id: 7,
    label: 'Expension Panel',
    url: components + 'expensionPanel'
  }, {
    id: 8,
    label: 'Progress',
    url: components + 'progress'
  }, {
    id: 9,
    label: 'Avatar',
    url: components + 'avatar'
  }, {
    id: 10,
    label: 'Icon',
    url: components + 'icon'
  }, {
    id: 11,
    label: 'List',
    url: components + 'list'
  }, {
    id: 12,
    label: 'Table',
    url: components + 'table'
  }, {
    id: 13,
    label: 'Tree View',
    url: components + 'treeView'
  }]
}, {
  id: 4,
  icon: 'Timeline',
  label: 'Charts',
  url: base + 'charts',
  subIcon: 'NavigateNext',
  open: false,
  subNavItems: [{
    id: 1,
    label: 'Arc',
    url: charts + 'arc'
  }, {
    id: 2,
    label: 'Line Mark',
    url: charts + 'lineMark'
  }, {
    id: 3,
    label: 'Bar',
    url: charts + 'bar'
  }, {
    id: 4,
    label: 'Heatmap',
    url: charts + 'heatmap'
  }, {
    id: 5,
    label: 'Area',
    url: charts + 'area'
  }, {
    id: 6,
    label: 'Label',
    url: charts + 'label'
  }]
}, {
  id: 5,
  icon: 'BlurOn',
  label: 'Iconography',
  url: base + 'iconography'
}];

export default navItems;