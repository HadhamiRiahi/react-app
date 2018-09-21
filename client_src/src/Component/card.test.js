import React from 'react' ;

import testUtils from 'react-addons-test-utils' ;
import { expect } from 'chai';
import Card from './Card';

 const Coolcomponent = ({ greeting }) =>(
  
        <h1>{greeting}</h1>
    
  
    );
describe("Card - testing with test utilities", () => {
    
  
    it("renders a card", () => {
       const renderer = testUtils.createRenderer();
       renderer.render(<Coolcomponent greeting='hello'/>);
       
       const output = renderer.getRenderOutput ();
       console.log(output);
      }); 
})