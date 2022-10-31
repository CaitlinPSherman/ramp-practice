export default function List({ array }) {
    return (
      <div className="list">
        <ul>
          {array.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
