import ListGroup from './components/list_group';

function app(){
  let items = [
    'html',
    'css',
    'javascript',
    'react.js',
    'json'
  ];

  const handle_selected_item = (item: string) => {
    console.log(item);
  }

  return <div><ListGroup items={items} heading={"city"} onselectitem={handle_selected_item}/></div>;
}

export default app;