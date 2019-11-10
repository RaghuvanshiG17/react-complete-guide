import  React, {PureComponent} from 'react';
import Person from './Person/Person';

class Persons extends PureComponent{

  // shouldComponentUpdate(nextProps, nextstate){
  //   console.log('shouldComponenrUpdate');
  //   if(nextProps.person!==this.props.person){
  //     return true;
  //   }else{
  //     return false;
  //   }
  // }
  render(){
     return this.props.person.map((per, index) =>{
        return <Person
          click={() => this.props.clicked(index)}
          name={per.name}
          age={per.age} 
          key={per.id}
          changed={(event) => this.props.changed(event,per.id)}
          isAuth={this.props.isAuthenticated}/>
  });
}
}
  export default Persons;