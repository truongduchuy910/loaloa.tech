import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import AllCungs from "../cungs/allCungs";
import AllCungVis from "../cungVis/allCungVis";
import AllTinhs from "../tinhs/allTinhs";
import AllPhuTinhs from "../phuTinhs/allPhuTinhs";
import { useState } from "react";
import request from "../config/request";
import cookie from "js-cookie";

export default function createKetQua({
  allCungs = [],
  allCungVis = [],
  allTinhs = [],
  allPhuTinhs = [],
  onCreate,
}) {
  function idOnly(values = []) {
    let temp = [];

    values.forEach((tinhs) => {
      if (tinhs)
        tinhs.forEach((tinh) => {
          temp.push({ id: tinh.id });
        });
    });
    return temp;
  }
  let [createButtonStatus, setCreateButtonStatus] = useState("Xem Kết Quả");
  let [selectedCung, setSelectedCung] = useState();
  let [selectedCungVi, setSelectedCungVi] = useState();
  let [selectedTinhs, setSelectedTinhs] = useState([]);
  let [selectedPhuTinhs, setSelectedPhuTinhs] = useState([]);
  let [selectedPhuTinhs1, setSelectedPhuTinhs1] = useState([]);
  let [selectedPhuTinhs2, setSelectedPhuTinhs2] = useState([]);
  let [selectedPhuTinhs3, setSelectedPhuTinhs3] = useState([]);
  let [selectedPhuTinhs4, setSelectedPhuTinhs4] = useState([]);
  let [selectedPhuTinhs5, setSelectedPhuTinhs5] = useState([]);
  let [label1, setLabel1] = useState(false);
  let [label2, setLabel2] = useState(false);
  let [label3, setLabel3] = useState(false);
  let [label4, setLabel4] = useState(false);
  let [label5, setLabel5] = useState(false);
  let variables = {
    selectedCung,
    selectedCungVi,
    selectedTinhs: idOnly([selectedTinhs]),
    selectedPhuTinhs: idOnly([
      selectedPhuTinhs,
      selectedPhuTinhs1,
      selectedPhuTinhs2,
      selectedPhuTinhs3,
      selectedPhuTinhs4,
      selectedPhuTinhs5,
    ]),
  };
  // console.log(variables);
  // functions
  async function createKetQua() {
    setCreateButtonStatus("Vui lòng chờ...");
    const query = `mutation(
      $selectedCung: CungWhereUniqueInput
      $selectedCungVi: CungViWhereUniqueInput
      $selectedTinhs: [TinhWhereUniqueInput]
      $selectedPhuTinhs: [PhuTinhWhereUniqueInput]
  ) {
      createKetQua(
      data: {
          cung: { connect: $selectedCung }
          cungVi: { connect: $selectedCungVi}
          chinhTinh: { connect: $selectedTinhs, disconnectAll: true }
          phuTinh: { connect: $selectedPhuTinhs, disconnectAll: true }
      }
      ) {
        id
      }
  }`;

    const { data, errors } = await request({ body: { query, variables } });
    if (!data.createKetQua)
      setCreateButtonStatus("Bạn bị giới hạn, vui lòng liên hệ qua livechat");
    else setCreateButtonStatus("Xem kết Quả");
    if (onCreate) onCreate({ data, errors });
  }
  return (
    <Grid container spacing={1} justify="center">
      <Grid item xs={12} md={4}>
        <AllCungs
          allCungs={allCungs}
          onChange={(value) => {
            if (value) {
              setLabel1(value.tieuDe1);
              setLabel2(value.tieuDe2);
              setLabel3(value.tieuDe3);
              setLabel4(value.tieuDe4);
              setLabel5(value.tieuDe5);
              setSelectedCung({ id: value.id });
            }
          }}
        />
      </Grid>

      <Grid item xs={12} md={4}>
        <AllCungVis
          allCungVis={allCungVis}
          onSelect={(value) => {
            if (value) setSelectedCungVi({ id: value.id });
          }}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <AllTinhs
          allTinhs={allTinhs}
          onSelect={(values) => setSelectedTinhs(values)}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <AllPhuTinhs
          allPhuTinhs={allPhuTinhs}
          onSelect={(values) => setSelectedPhuTinhs(values)}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <AllPhuTinhs
          label={label1}
          allPhuTinhs={allPhuTinhs}
          onSelect={(values) => setSelectedPhuTinhs1(values)}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <AllPhuTinhs
          label={label2}
          allPhuTinhs={allPhuTinhs}
          onSelect={(values) => setSelectedPhuTinhs2(values)}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <AllPhuTinhs
          label={label3}
          allPhuTinhs={allPhuTinhs}
          onSelect={(values) => setSelectedPhuTinhs3(values)}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <AllPhuTinhs
          label={label4}
          allPhuTinhs={allPhuTinhs}
          onSelect={(values) => setSelectedPhuTinhs4(values)}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <AllPhuTinhs
          label={label5}
          allPhuTinhs={allPhuTinhs}
          onSelect={(values) => setSelectedPhuTinhs5(values)}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Button
          style={{
            backgroundColor: "#76552a",
            color: "#dab857",
            marginTop: 21,
            marginBottom: 21,
          }}
          fullWidth
          onClick={() => createKetQua()}
        >
          {createButtonStatus}
        </Button>
      </Grid>
    </Grid>
  );
}
