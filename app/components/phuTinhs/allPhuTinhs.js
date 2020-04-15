import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default function allPhuTinhs({ allPhuTinhs, onSelect, label }) {
  return (
    <Autocomplete
      onChange={(event, values) => onSelect(values)}
      multiple
      size="small"
      options={allPhuTinhs}
      getOptionLabel={option => {
        if (option) return option.name;
      }}
      filterSelectedOptions
      renderInput={params => (
        <TextField
          {...params}
          label={label}
          variant="outlined"
          placeholder="Nhập Phụ Tinh"
        />
      )}
    />
  );
}
