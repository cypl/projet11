function Owner({ name, picture }) {
  return (
    <div className="owner">
      <p className="owner_name">{name}</p>
      <figure className="owner_picture">
        <img src={picture} alt="{name}" />
      </figure>
    </div>
  )
}

export default Owner
