import ListGroup from './components/list_group';

function app(){
  let items = [
    'html',
    'css',
    'javascript',
    'react.js',
    'json'
  ];

  return <div><ListGroup items={items} heading={"city"}/></div>;
}

export default app;