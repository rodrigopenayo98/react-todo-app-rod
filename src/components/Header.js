const Header = () => {
  const headerStyle = {
    padding: '20px 0',
    lineHeight: '1.5em',
    color: '#aeadad',
    textAlign: 'center',
  };

  const titleStyle = {
    fontSize: '3rem',
    fontWeight: '600',
    marginBottom: '1rem',
    lineHeight: '1em',
    textTransform: 'lowercase',
    textAlign: 'center',
  };

  return (
    <header style={headerStyle}>
      <h1 style={titleStyle}>todos</h1>
      <p>Items will persist in the browser local storage</p>
    </header>
  );
};
export default Header;
