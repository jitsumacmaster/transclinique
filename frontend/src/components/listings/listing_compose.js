import React from 'react';
import ListingBox from './listing_box';

class ListingCompose extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          title: '',
          text: "",
          listingstatus: '',
          price: 0,
          size: {},
          finishes: {},
          length: {},
          shapes: {},
          colors: {},
          styles: {},
          newListing: "",
      }

      this.handleSubmit = this.handleSubmit.bind(this);
  } 

  componentWillReceiveProps(nextProps) {
      this.setState({newListing: nextProps.newListing});
  }

  handleSubmit(e) {
    e.preventDefault();
    let listing = {
      listingstatus: this.state.listingstatus,
      title: this.state.title,
      //Text is the listing description
      text: this.state.text,
      price: this.state.price,
      size: this.state.size,      
      finishes: this.state.finishes,
      length: this.state.length,
      shapes: this.state.shapes,
      colors: this.state.colors,
      styles: this.state.styles,
    };

    this.props.composeListing(listing); 
    this.setState({
      listingstatus: '',
      title: '',
      text: '',
      size: {},
      finishes: {},
      length: {},
      shapes: {},
      colors: {},
      styles: {},
    })
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value 
    });
  }

  updateObj(field) {
    return e => this.setState({ [field]: Object.assign( this.state[field] || {}, {
      [e.target.name]: e.target.checked
    } ) } );
  }

  // updatePrice(field){
  //   this.update(field)
  //   this.setTwoNumberDecimal()
  // }

  // setTwoNumberDecimal(event) {
  //   this.value = parseFloat(this.value).toFixed(2);
  // }

  render() {
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <div>
                  Listing Status:
                  <input type="textarea" 
                    value={this.state.listingstatus}
                    onChange={this.update('listingstatus')}
                    placeholder="Enter text here"
                  />
                  <br/>
                  Title
                  <input type="textarea"
                    value={this.state.title}
                    onChange={this.update('title')}
                    placeholder="Title (Required Field)"
                  />
                  <br/>

                  Description      
                  <input type="textarea" 
                    value={this.state.text}
                    onChange={this.update('text')}
                    placeholder="Enter text here"
                  />
                  <br/>

                  Price $   
                  <input type="number" 
                    value={this.state.price}
                    min="0"
                    onChange={this.update('price')}
                    placeholder="Enter price here in USD"
                  />
                  (Please Enter in USD)
                  <br/>

                  Size:
                  Small
                  <input type="checkbox" name="small" onChange={this.updateObj('size')}/>
                  Medium
                  <input type="checkbox" name="medium" onChange={this.updateObj('size')}/>                  
                  Large
                  <input type="checkbox" name="large" onChange={this.updateObj('size')}/>                  
                  X Large
                  <input type="checkbox" name="xl" onChange={this.updateObj('size')}/>                  
                  XX Large
                  <input type="checkbox" name="xxl" onChange={this.updateObj('size')}/>
                  <br/>                  
                  Full Set (Contact Artist)
                  <input type="checkbox" name="fullset" onChange={this.updateObj('size')}/>                  
                  Custom Size (Contact Artist)
                  <input type="checkbox" name="customsize" onChange={this.updateObj('size')}/>

                  <br/>
                  Finishes:
                  Matte
                  <input type="checkbox" name="matte" onChange={this.updateObj('finishes')}/>
                  Gloss
                  <input type="checkbox" name="gloss" onChange={this.updateObj('finishes')}/>

                  <br/>
                  Length:
                  Short
                  <input type="checkbox" name="short" onChange={this.updateObj('length')}/>
                  Medium
                  <input type="checkbox" name="medium" onChange={this.updateObj('length')}/>
                  Long
                  <input type="checkbox" name="long" onChange={this.updateObj('length')}/>
                  Extra Long
                  <input type="checkbox" name="extralong" onChange={this.updateObj('length')}/>

                  <br/>
                  Shapes:
                  Coffin
                  <input type="checkbox" name="coffin" onChange={this.updateObj('shapes')}/>
                  Stiletto
                  <input type="checkbox" name="stiletto" onChange={this.updateObj('shapes')}/>
                  Square
                  <input type="checkbox" name="square" onChange={this.updateObj('shapes')}/>
                  Almond
                  <input type="checkbox" name="almond" onChange={this.updateObj('shapes')}/>
                  Oval
                  <input type="checkbox" name="oval" onChange={this.updateObj('shapes')}/>
                  Round
                  <input type="checkbox" name="round" onChange={this.updateObj('shapes')}/>
                  Ballerina
                  <input type="checkbox" name="ballerina" onChange={this.updateObj('shapes')}/>

                  <br/>
                  Colors:
                  Pink
                  <input type="checkbox" name="pink" onChange={this.updateObj('colors')}/>
                  White
                  <input type="checkbox" name="white" onChange={this.updateObj('colors')}/>
                  Orange
                  <input type="checkbox" name="orange" onChange={this.updateObj('colors')}/>
                  Red
                  <input type="checkbox" name="red" onChange={this.updateObj('colors')}/>
                  Black
                  <input type="checkbox" name="black" onChange={this.updateObj('colors')}/>
                  Blue
                  <input type="checkbox" name="blue" onChange={this.updateObj('colors')}/>
                  Green
                  <input type="checkbox" name="green" onChange={this.updateObj('colors')}/>
                  Purple
                  <input type="checkbox" name="purple" onChange={this.updateObj('colors')}/>                  
                  Brown
                  <input type="checkbox" name="brown" onChange={this.updateObj('colors')}/>                  
                  Yellow
                  <input type="checkbox" name="yellow" onChange={this.updateObj('colors')}/>                  
                  Clear
                  <input type="checkbox" name="clear" onChange={this.updateObj('colors')}/>                  
                  Gold
                  <input type="checkbox" name="gold" onChange={this.updateObj('colors')}/>                  
                  Silver
                  <input type="checkbox" name="silver" onChange={this.updateObj('colors')}/>                  
                  Other
                  <input type="checkbox" name="other" onChange={this.updateObj('colors')}/>

                  <br/>
                  Styles:
                  Plain
                  <input type="checkbox" name="plain" onChange={this.updateObj('styles')}/>
                  Bling
                  <input type="checkbox" name="bling" onChange={this.updateObj('styles')}/>
                  Textured (i.e. Glitter, 3D)
                  <input type="checkbox" name="textured" onChange={this.updateObj('styles')}/>
                  Pattern
                  <input type="checkbox" name="pattern" onChange={this.updateObj('styles')}/>
                  Neon
                  <input type="checkbox" name="neon" onChange={this.updateObj('styles')}/>
                  Character (i.e. Cartoons, Anime)
                  <input type="checkbox" name="character" onChange={this.updateObj('styles')}/>
                  Themed (i.e. Butterfly, Floral)
                  <input type="checkbox" name="theme" onChange={this.updateObj('styles')}/>
                  Occassion (i.e. Birthday, Seasons)
                  <input type="checkbox" name="occassion" onChange={this.updateObj('styles')}/>                  
                  Other
                  <input type="checkbox" name="other" onChange={this.updateObj('styles')}/>
                  
                  {/* I accept returns and exchanges
                  <input type="checkbox" value="I accept returns and exchanges"/>
                  <br/>
                  I accept PayPal
                  <input type="checkbox" value="I accept PayPal"/>
                  <br/>
                  I accept credit card(s)
                  <input type="checkbox" value="I accept credit card(s)"/>
                  <br/>
                  I accept full and custom sets for an additional fee
                  <input type="checkbox" value="I accept full and custom sets for an additional fee"/>
     
                  <br/> */}

                  {/* Store Policy, Fees and Shipping Details:
                  <input type="textarea" 
                    value={this.state.storepolicy}
                    onChange={this.update('storepolicy')}
                    placeholder="Enter text here"
                  />
                  <br/> */}
                  <br/>
                  <input type="submit" value="Submit" />
                </div>
            </form>
            <br />
            <ListingBox listing={this.state.newListing} />
        </div>
    )
  }
}

export default ListingCompose;
