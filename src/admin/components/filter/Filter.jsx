import "./Filter.scss";

const departments = [
  { id: 1, nom: "Math-Infos" },
  { id: 2, nom: "Physique" },
  { id: 3, nom: "Chimie" },
  { id: 4, nom: "Biologie" },
  { id: 5, nom: "Géologie" },
  { id: 6, nom: "Cloud" },
  { id: 7, nom: "Machine Learning" },
  { id: 8, nom: "Deep Learning" },
  { id: 9, nom: "Data Science" },
];

const Filter = ({title}) => {
  return (
    <div className="filter">
      <select id="filter">
        <option value="" style={{color: "#616161"}}>Filtrer par {title}</option>
        {departments.map((dept) => (
          <option key={dept.id} value={dept.id}>
            {dept.nom}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
