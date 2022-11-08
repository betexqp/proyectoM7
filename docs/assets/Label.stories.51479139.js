var i=Object.defineProperty;var t=(e,n)=>i(e,"name",{value:n,configurable:!0});import{r as p,b as d,j as r}from"./jsx-runtime.3314d066.js";import"./iframe.610b302e.js";const o=t(({label:e,url:n,...l})=>{const[a,c]=p.exports.useState(0);return d("label",{...l,children:[e," - ",a," - ",n,r("button",{onClick:()=>c(a+1),children:"incrementar"})]})},"Label");try{o.displayName="Label",o.__docgenInfo={description:"Primary UI component for user interaction",displayName:"Label",props:{label:{defaultValue:null,description:"Etiqueta que se visualizara",name:"label",required:!0,type:{name:"string"}},url:{defaultValue:null,description:"Etiqueta que se visualizara",name:"url",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Label.tsx#Label"]={docgenInfo:o.__docgenInfo,name:"Label",path:"src/components/Label.tsx#Label"})}catch{}const L={parameters:{storySource:{source:`import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Label } from '../components/Label';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Label',
  component: Label,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
   
  },
} as ComponentMeta<typeof Label>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Simple = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Simple.args = {
  label: 'Simple',
  url: "prueba,comn"
};

export const Advanced = Template.bind({});
Advanced.args = {
  label: 'Advanced',
};
`,locationsMap:{simple:{startLoc:{col:47,line:17},endLoc:{col:76,line:17},startBody:{col:47,line:17},endBody:{col:76,line:17}},advanced:{startLoc:{col:47,line:17},endLoc:{col:76,line:17},startBody:{col:47,line:17},endBody:{col:76,line:17}}}}},title:"Example/Label",component:o,argTypes:{}},s=t(e=>r(o,{...e}),"Template"),m=s.bind({});m.args={label:"Simple",url:"prueba,comn"};const b=s.bind({});b.args={label:"Advanced"};const f=["Simple","Advanced"];export{b as Advanced,m as Simple,f as __namedExportsOrder,L as default};
//# sourceMappingURL=Label.stories.51479139.js.map
