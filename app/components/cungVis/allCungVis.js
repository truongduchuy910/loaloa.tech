import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default function allCungVis({ allCungVis, onSelect }) {
  return (
    <Autocomplete
      onChange={(event, values) => onSelect(values)}
      id="CungVi"
      size="small"
      options={allCungVis}
      getOptionLabel={option => {
        if (option) return option.name;
      }}
      filterSelectedOptions
      renderInput={params => (
        <TextField
          {...params}
          variant="outlined"
          label="Cung Vị"
          placeholder="Nhập Cung Vị"
        />
      )}
    />
  );
}
