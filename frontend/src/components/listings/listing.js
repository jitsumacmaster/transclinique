import React from 'react';
import { withRouter } from 'react-router-dom';
import DetailList from '../detailbox/detail_list';
import DetailDropdown from '../detailbox/detail_dropdown';

class Listing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listing: {},
      catagories: {}
    }
  }

  componentDidMount() {
    let id = this.props.match.params.id
    this.props.fetchListing(id);
  }



  componentDidUpdate(prevProps){
    if (this.props.listing._id !== prevProps.listing._id) {
      // const id = this.props.match.params.id;
      this.setState({ listing: this.props.listing });
    }
  }

  makeArraysForComponents() {
    const detailCatagories = ['colors', 'finishes', 'length', 'shapes', 'size', 'styles']
    detailCatagories.forEach(detail => {
      if (this.state.listing[detail]) {
        // this.setState({ catagories[detail]: (Object.keys(this.props.listing[detail]).filter(el => this.props.listing[detail][el])});
        this.state.catagories[detail] = (Object.keys(this.state.listing[detail]).filter(el => this.state.listing[detail][el]))
      }
    })
  }

  // componentWillReceiveProps(newState) {
  //   this.setState({ listing: newState.listing })
  //   this.makeArraysForComponents()
  //   // console.log(this.props)
  // }

  render() {
    if (Object.keys(this.state.listing) === 0) {
      return (<div>Loading...(If product does not display reload page)</div>)
    } else {
      this.makeArraysForComponents()

      // console.log(this.state)
      return (
        <div>
            <h1>
              {this.state.listing.title}
            </h1>
            <h2>${this.state.listing.price}</h2>
            <p>{this.state.listing.text}</p>
              <DetailList key='colors' name='colors' details={this.state.catagories.colors}/>
              {/* <DetailList key='finishes' name='finishes' details={this.state.catagories.finishes}/> */}
              <DetailList key='styles' name='styles' details={this.state.catagories.styles}/>
            
            <form onSubmit={this.handleSubmit}>
              <DetailDropdown key='size' name='size' options={this.state.catagories.size}/>
              <br/>
              <DetailDropdown key='length' name='length' options={this.state.catagories.length}/>
              <br/>
              <DetailDropdown key='shapes' name='shapes' options={this.state.catagories.shapes}/>
              <br/>
              <DetailDropdown key='finishes' name='finishes' options={this.state.catagories.finishes}/>
          
            </form>
            
            <p>Listing Status: {this.state.listing.listingstatus}</p>

        </div>
      );
    }
  }
}

export default withRouter(Listing);
