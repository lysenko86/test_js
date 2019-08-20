import '../../stylesheets/Star.css';

const Star = ({selected=false, onClick=f=>f}) =>
    <div className={selected ? 'star selected' : 'star'} onClick={onClick}></div>
Star.propTypes = {
    selected: React.PropTypes.bool,
    onClick: React.PropTypes.func
}
