/*
  All code here is blatantly stolen from Treehouse's React Basics workshop found at https://teamtreehouse.com/library/react-basics

  The difference is, after completing the worksjop I ES2015-ified the react components and javascript as an exercise to practice more ES2015.
*/
const PLAYERS = [];
// This should be a random number that does not conflict with
// `player.id` defined in PLAYERS
let nextId = 3;


class AddPlayerForm extends React.Component {
  constructor(props) {
    super(props);
    // Set default state
    this.state = { name: ''
      // Bind custom methods
    };this._onNameChange = this._onNameChange.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
  }

  _onNameChange(e) {
    this.setState({ name: e.target.value });
  }

  _onSubmit(e) {
    e.preventDefault();
    this.props.onAdd(this.state.name);
    this.setState({ name: '' });
  }

  render() {
    return (
      React.createElement("div", { className: "add-player-form" },
      React.createElement("form", { onSubmit: this._onSubmit },
      React.createElement("input", { type: "text", value: this.state.name, onChange: this._onNameChange }),
      React.createElement("input", { type: "submit", value: "\u05D4\u05D5\u05E1\u05E3 \u05E9\u05D7\u05E7\u05DF" }))));



  }}

// Define proptypes fpr a stateless component
AddPlayerForm.propTypes = {
  onAdd: React.PropTypes.func.isRequired


  // Es6 Stateless component
};const Stats = props => {
  const totalPlayers = props.players.length;

  return (
    React.createElement("table", { className: "stats" },
    React.createElement("tbody", null,
    React.createElement("tr", null,
    React.createElement("td", null, "\u05DB\u05DE\u05D5\u05EA \u05E9\u05D7\u05E7\u05E0\u05D9\u05DD:"),
    React.createElement("td", null, totalPlayers)))));




};
// Define proptypes fpr a stateless component
Stats.propTypes = {
  players: React.PropTypes.array.isRequired };


// Es6 Stateless component
const Header = (props) =>
React.createElement("div", { className: "header" },
React.createElement(Stats, { players: props.players }),
React.createElement("h1", null, props.title));


// Define proptypes fpr a stateless component
Header.propTypes = {
  title: React.PropTypes.string.isRequired,
  players: React.PropTypes.array.isRequired };


// Es6 Stateless component
const Counter = (props) =>
React.createElement("div", { className: "counter" },
React.createElement("button", { className: "counter-action decrement", onClick: function () {props.onChange(-1);} }, " - "),
React.createElement("div", { className: "counter-score" }, " ", props.score, " "),
React.createElement("button", { className: "counter-action increment", onClick: function () {props.onChange(1);} }, " + "));


// Define proptypes fpr a stateless component
Counter.propTypes = {
  score: React.PropTypes.number.isRequired,
  onChange: React.PropTypes.func.isRequired


  // Es6 Stateless component
};const Player = (props) =>
React.createElement("div", { className: "player" },
React.createElement("div", { className: "player-name" },
React.createElement("a", { className: "remove-player", onClick: props.onRemove }, "\u2716"),
props.name),

React.createElement("div", { className: "player-score" },
React.createElement(Counter, { score: props.score, onChange: props.onScoreChange })));



// Define proptypes fpr a stateless component
Player.propTypes = {
  name: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired,
  onScoreChange: React.PropTypes.func.isRequired,
  onRemove: React.PropTypes.func.isRequired };


class Application extends React.Component {
  constructor(props) {
    super(props);
    // Set the initial state
    this.state = { players: this.props.initialPlayers
      // Bind custom methods
    };this._onScoreChange = this._onScoreChange.bind(this);
    this._onPlayerAdd = this._onPlayerAdd.bind(this);
    this._onRemovePlayer = this._onRemovePlayer.bind(this);
  }

  _onScoreChange(index, delta) {
    this.state.players[index].score += delta;
    this.setState(this.state);
  }

  _onPlayerAdd(name) {
    this.state.players.push({
      name: name,
      score: 0,
      id: nextId });

    this.setState(this.state);
    nextId += 1;
  }

  _onRemovePlayer(index) {
    this.state.players.splice(index, 1);
    this.setState(this.state);
  }

  render() {
    return (
      React.createElement("div", { className: "scoreboard" },
      React.createElement(Header, { title: this.props.title, players: this.state.players }),

      React.createElement("div", { className: "players" },
      this.state.players.map((player, index) =>
      React.createElement(Player, {
        onScoreChange: delta => this._onScoreChange(index, delta),
        onRemove: () => this._onRemovePlayer(index),
        name: player.name,
        score: player.score,
        key: player.id }))),


      React.createElement(AddPlayerForm, { onAdd: this._onPlayerAdd })));


  }}


Application.propTypes = {
  title: React.PropTypes.string,
  initialPlayers: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    score: React.PropTypes.number.isRequired,
    id: React.PropTypes.number.isRequired })).
  isRequired };


Application.defaultProps = {
  title: "יניב קטאן"


  // Load the app into the DOM
};ReactDOM.render(
React.createElement(Application, { initialPlayers: PLAYERS }),
document.getElementById('App'));