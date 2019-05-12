function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const categories = [
{
  title: "animals",
  img: "",
  tags: ["cute", "alive", "yummy"],
  subcategories: [
  {
    name: "animal",
    img: "http://www.myiconfinder.com/uploads/iconsets/256-256-86dc422818667e51e344d8c812995e96-cat.png",
    asl: 1 },

  {
    name: "dog",
    img: "",
    asl: 1 }] },



{
  title: "foods",
  img: "",
  tags: ["cute", "yummy"],
  subcategories: [
  {
    name: "food",
    img: "" },

  {
    name: "carrot",
    img: "" }] },



{
  title: "foodies",
  img: "",
  tags: ["here"],
  subcategories: [
  {
    name: "carroties",
    img: "" }] }];






// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp('^' + escapedValue, 'i');
  console.log(regex);

  return categories.
  map(section => {
    var newthing = "";
    var bool = false;
    section.tags.forEach(newtag => {
      if (regex.test(newtag) == true) {bool = true;} else
      if (bool == true) {} else
      {bool = false;}
    });
    console.log("bool" + bool);
    console.log(regex.test(section.title));
    if (regex.test(section.title) == true) {
      console.log("not hello");
      return {
        title: section.title,
        subcategories: section.subcategories.filter(subcategory => regex.test(section.title)) };

    } else
    if (bool == true) {
      console.log(section.tags.indexOf(regex));
      let newvar = [];
      section.tags.forEach(tag => {
        if (regex.test(tag)) {
          section.subcategories.forEach(subcategory => {
            newvar.push(subcategory);
          });
        }
      });
      return {
        title: section.title,
        subcategories: newvar };

    } else
    {
      console.log("hello!");
      return {
        title: section.title,
        subcategories: section.subcategories.filter(subcategory => regex.test(subcategory.name)) };

    }
  }).
  filter(section => section.subcategories.length > 0);
}

function getSuggestionValue(suggestion) {
  return suggestion.name;
}

function renderSuggestion(suggestion) {
  return (
    React.createElement("span", null, suggestion.name, "     ", React.createElement("img", { src: "{suggestion.img}" })));

}

function renderSectionTitle(section) {
  return (
    React.createElement("strong", null, section.title));

}

function getSectionSuggestions(section) {
  return section.subcategories;
}

class App extends React.Component {
  constructor() {
    super();_defineProperty(this, "onChange",







    (event, { newValue, method }) => {
      this.setState({
        value: newValue });

    });_defineProperty(this, "onSuggestionsFetchRequested",

    ({ value }) => {
      this.setState({
        suggestions: getSuggestions(value) });

    });_defineProperty(this, "onSuggestionsClearRequested",

    () => {
      this.setState({
        suggestions: [] });

    });this.state = { value: '', suggestions: [] };}

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Type 'c'",
      value,
      onChange: this.onChange };


    return (
      React.createElement(Autosuggest, {
        multiSection: true,
        suggestions: suggestions,
        onSuggestionsFetchRequested: this.onSuggestionsFetchRequested,
        onSuggestionsClearRequested: this.onSuggestionsClearRequested,
        getSuggestionValue: getSuggestionValue,
        renderSuggestion: renderSuggestion,
        renderSectionTitle: renderSectionTitle,
        getSectionSuggestions: getSectionSuggestions,
        inputProps: inputProps }));

  }}


ReactDOM.render(React.createElement(App, null), document.getElementById('app'));