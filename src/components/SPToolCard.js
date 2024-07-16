import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function SPToolCard({data}) {
  return (
    <div>
      {data.map((el, index) => (
        <div className="myCard" key={index}>
          <div
            style={{
              justifyContent: "space-evenly",
              display: "flex",
              flexDirection: "column",
              width: "15%",
              gap: "10px",
            }}
          >
            <div style={{display: "flex", justifyContent: "space-between"}}>
              <div>Type</div>
              <div>{el.type ? el.type : "sp_change"}</div>
            </div>
            <div style={{display: "flex", justifyContent: "space-between"}}>
              <div>Article Number</div>
              <div>{el.payload.articleNumber}</div>
            </div>
            <div style={{display: "flex", justifyContent: "space-between"}}>
              <div>proposedBy</div>
              <div>{el.payload.proposedBy}</div>
            </div>
          </div>
          <div
            style={{justifyContent: "space-evenly", display: "flex", flexDirection: "column", width: "18%", gap: "5px"}}
          >
            <div style={{display: "flex", justifyContent: "space-between"}}>
              <div>landingPrice</div>
              <div>{el.payload.landingPrice}</div>
            </div>
            <div style={{display: "flex", justifyContent: "space-between"}}>
              <div>Price MRP</div>
              <div>{el.payload.price_MRP}</div>
            </div>
            <div style={{display: "flex", justifyContent: "space-between"}}>
              <div>Price Sale</div>
              <div>{el.payload.price_SALE}</div>
            </div>
            <div style={{display: "flex", justifyContent: "space-between"}}>
              <div>discount</div>
              <div>{el.payload.discount}</div>
            </div>
            <div style={{display: "flex", justifyContent: "space-between"}}>
              <div>Max Quantity</div>
              <div>{el.payload.maxQuantity}</div>
            </div>
            <div style={{display: "flex", justifyContent: "space-between"}}>
              <div>OLD_price_SALE</div>
              <div>{el.payload.OLD_price_SALE}</div>
            </div>
            <div style={{display: "flex", justifyContent: "space-between"}}>
              <div>OLD_discount</div>
              <div>{el.payload.OLD_discount}</div>
            </div>
            <div style={{display: "flex", justifyContent: "space-between"}}>
              <div>OLD_maxQuantity</div>
              <div>{el.payload.OLD_maxQuantity}</div>
            </div>
            <div style={{display: "flex", justifyContent: "space-between"}}>
              <div>FFMplantCode</div>
              <div>{el.payload.FFMplantCode}</div>
            </div>
            <div style={{display: "flex", justifyContent: "space-between"}}>
              <div>JIT</div>
              <div>{el.payload.JIT}</div>
            </div>
            <div style={{display: "flex", justifyContent: "space-between"}}>
              <div>FC Code</div>
              <div>{el.payload.fcCode}</div>
            </div>
          </div>
          <div>
            <div>Activity logs :</div>
            {/* {el.activityLog.map((el, index) => (
              <div key={index}>
                <dd>
                  <strong>- Action : {el.action} </strong>
                </dd>
                <dd>- userId : {el.userId} </dd>
                <dd>- userRole : {el.userRole} </dd>
                <dd>- createdAt: {el.createdAt} </dd>
              </div>
            ))} */}
            <Table sx={{minWidth: 650}} aria-label="simple table">
              <TableHead>
                <TableRow className="table_head">
                  <TableCell sx={{fontWeight: "bold"}}>Action</TableCell>
                  <TableCell sx={{fontWeight: "bold"}} align="right">
                    userId
                  </TableCell>
                  <TableCell sx={{fontWeight: "bold"}} align="right">
                    userRole&nbsp;(g)
                  </TableCell>
                  <TableCell sx={{fontWeight: "bold"}} align="right">
                    createdAt&nbsp;(g)
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {el.activityLog.map((el, index) => (
                  <TableRow key={index} sx={{"&:last-child td, &:last-child th": {border: 0}}}>
                    <TableCell component="th" scope="row">
                      {el.action}
                    </TableCell>
                    <TableCell align="right">{el.userId}</TableCell>
                    <TableCell align="right">{el.userRole}</TableCell>
                    <TableCell align="right">{el.createdAt}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SPToolCard;
