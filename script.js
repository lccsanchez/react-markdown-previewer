marked.setOptions({
  breaks: true });


const renderer = new marked.Renderer();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: placeholder,
      editormaximized: false,
      previewermaximized: false };

    this.handleChange = this.handleChange.bind(this);
    this.handleEditorMaximize = this.handleEditorMaximize.bind(this);
    this.handlePreviewerMaximize = this.handlePreviewerMaximize.bind(this);
  }

  handleChange(e) {
    this.setState({
      markdown: e.target.value });

  }

  handleEditorMaximize() {
    this.setState({
      editormaximized: !this.state.editormaximized });

  }

  handlePreviewerMaximize() {
    this.setState({
      previewermaximized: !this.state.previewermaximized });

  }

  render() {
    const maxAndMin = this.state.editormaximized ?
    ["col-xl-4 editorWrap maximized", "previewWrap hide", "fa fa-compress"] : this.state.previewermaximized ? ["editorWrap hide", "col-xl-4 previewWrap maximized", "fa fa-compress"] : ["col-xl-4 editorWrap", "col-xl-8 previewWrap", "fa fa-arrows-alt"];
    return /*#__PURE__*/(
      React.createElement("div", { className: "container p-4" }, /*#__PURE__*/
      React.createElement("div", { className: "row" }, /*#__PURE__*/
      React.createElement("div", { className: maxAndMin[0] }, /*#__PURE__*/
      React.createElement(Toolbar, {
        icon: maxAndMin[2],
        title: "Editor",
        onClick: this.handleEditorMaximize }), /*#__PURE__*/
      React.createElement(Editor, { markdown: this.state.markdown, onChange: this.handleChange })), /*#__PURE__*/

      React.createElement("div", { className: maxAndMin[1] }, /*#__PURE__*/
      React.createElement(Toolbar, {
        icon: maxAndMin[2],
        title: "Preview",
        onClick: this.handlePreviewerMaximize }), /*#__PURE__*/
      React.createElement(Previewer, { markdown: this.state.markdown })))));




  }}


const Editor = props => {
  return /*#__PURE__*/(
    React.createElement("textarea", {
      id: "editor",
      value: props.markdown,
      onChange: props.onChange }));



};

const Previewer = props => {
  const textMarked = marked.parse(props.markdown, { renderer: renderer });
  return /*#__PURE__*/(
    React.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: textMarked },

      id: "preview" }));


};

const Toolbar = props => {
  return /*#__PURE__*/(
    React.createElement("div", { className: "toolbar" }, /*#__PURE__*/
    React.createElement("i", { className: "fa fa-free-code-camp", title: "no-stack-dub-sack" }),
    props.title, /*#__PURE__*/
    React.createElement("i", { className: props.icon, onClick: props.onClick })));


};

const placeholder = `# This is my React Markdown Previewer!

## First, a sub-heading to initialize...

Second, I will give a link to [FreeCodeCamp](https://www.freecodecamp.org) for you see the best website to learning coding!

Now, heres some code: 

**inline:**

\`<div><p>Hello World!</p></div>\`, between 2 backticks.

**multi-line:**
\`\`\`
function helloWorld() {
  let first = "Hello";
  let second = "World"
  return (first + second);
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

BUT SEE THIS! 
> Block Quotes!

And if you want to get really crazy, even tables:

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));