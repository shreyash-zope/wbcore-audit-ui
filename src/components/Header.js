import {Box, Button, Modal} from "@mui/material";
import {useState} from "react";
import FilterListRoundedIcon from "@mui/icons-material/FilterListRounded";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Header({onApplyFilter}) {
  const modules = ["slotnxtops", "slotnxtsupport", "spupdate", "batchflip"];

  const [open, setOpen] = useState(true);
  const [filterApplied, setFilterApplied] = useState(false);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [selectedModule, setSelectedModule] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const applyFilter = async () => {
    setFilterApplied(true);
    handleClose();

    const newFilters = {from, to, selectedModule};

    try {
      //   const queryString = new URLSearchParams(newFilters).toString();
      //   const response = await fetch(`http://localhost:3909/core/audit?${queryString}`);

      //   if (!response.ok) {
      //     throw new Error(`HTTP error! Status: ${response.status}`);
      //   }

      //   const data = await response.json();
      console.log(`http://localhost:3909/core/audit?${new URLSearchParams(newFilters).toString()}`);
      const data = [
        {
          serviceId: "5d3020dd9ab0afa6094c803d",
          serviceName: "price",
          eventName: "SP_UPDATE",
          activityLog: [
            {
              userId: "master1",
              userGrp: "price",
              userRole: "master",
              type: "inclusion",
              action: "committed",
              assignedToUserGrp: "price",
              assignedToUserRole: "master",
              createdAt: "2024-06-13T15:40:55.006Z",
            },
            {
              userId: "master1",
              userGrp: "price",
              userRole: "master",
              action: "approved",
              type: "inclusion",
              createdAt: "2024-06-13T15:40:53.761Z",
            },
            {
              userId: "master1",
              userGrp: "price",
              userRole: "master",
              action: "created",
              type: "inclusion",
              createdAt: "2024-06-13T15:40:53.761Z",
            },
          ],
          fileIds: [],
          createdAt: "2024-06-13T15:40:53.761Z",
          updatedAt: "2024-06-13T15:40:55.006Z",
          expiresAt: "2025-06-12T18:29:59.000Z",
          isArchived: true,
          payload: {
            homeorpup: "0",
            cod: "Y",
            groceryType: "v",
            defaultRank: "10",
            imagekey: "K/C/h/KCheese1kgAMUL2640XX270417",
            productImageKey: "KCheese1kgAMUL2640XX270417",
            binaryimgcode: "32768",
            imgcode: "1",
            availabilityType: "A",
            price_MRP: "453.00",
            price_SALE: "421.00",
            save_price: "32.00",
            invstatus: "2",
            maxQuantity: "4",
            totalVolume: "0.00",
            initialInclusion: "false",
            isffmUpdateAllowed: true,
            FFMplantCode: "AAB0",
            boType: "",
            isBuyable: false,
            defining: [
              {
                volume: "950 gm",
              },
            ],
            skuUniqueID: "113513",
            articleNumber: "130000390",
            default_variant: "N",
            isPriceEditAllowed: "Y",
            bulkQuantity: "",
            bulkThreshold: "",
            exclusive: "",
            minBulkQuantity: "",
            giftItem: "",
            name: "Amul Processed Cheese : 950 gms",
            tags: ["veg"],
            ribbon: "",
            excluded: "false",
            variantInfoTxtValue: "",
            image: "KCheese1kgAMUL2640XX270417_1_P.jpg",
            storeId: "10654",
            JIT: "Mulund",
            fcCode: "AAB0",
            OLD_price_SALE: "421.00",
            landingPrice: "415.860",
            OLD_maxQuantity: "3",
            OLD_discount: "7.06",
            discount: "7.06",
            lastUpdatedAt: "2023-10-30T06:00:37.251Z",
            startDate: "",
            endDate: "",
            isArticleIncluded: true,
            published: "true",
            proposedBy: "swapnil.a01",
            sptoolUserType: "",
            sellingPrice: "421.00",
          },
          type: "inclusion",
        },
        {
          serviceId: "5d3020dd9ab0afa6094c803d",
          serviceName: "price",
          eventName: "SP_UPDATE",
          activityLog: [
            {
              userId: "master1",
              userGrp: "price",
              userRole: "master",
              type: "inclusion",
              action: "committed",
              assignedToUserGrp: "price",
              assignedToUserRole: "master",
              createdAt: "2024-06-13T15:40:55.006Z",
            },
            {
              userId: "master1",
              userGrp: "price",
              userRole: "master",
              action: "approved",
              type: "inclusion",
              createdAt: "2024-06-13T15:40:53.761Z",
            },
            {
              userId: "master1",
              userGrp: "price",
              userRole: "master",
              action: "created",
              type: "inclusion",
              createdAt: "2024-06-13T15:40:53.761Z",
            },
          ],
          fileIds: [],
          createdAt: "2024-06-13T15:40:53.761Z",
          updatedAt: "2024-06-13T15:40:55.006Z",
          expiresAt: "2025-06-12T18:29:59.000Z",
          isArchived: true,
          payload: {
            homeorpup: "0",
            cod: "Y",
            groceryType: "v",
            defaultRank: "10",
            imagekey: "K/C/h/KCheese1kgAMUL2640XX270417",
            productImageKey: "KCheese1kgAMUL2640XX270417",
            binaryimgcode: "32768",
            imgcode: "1",
            availabilityType: "A",
            price_MRP: "453.00",
            price_SALE: "421.00",
            save_price: "32.00",
            invstatus: "2",
            maxQuantity: "4",
            totalVolume: "0.00",
            initialInclusion: "false",
            isffmUpdateAllowed: true,
            FFMplantCode: "AAB0",
            boType: "",
            isBuyable: false,
            defining: [
              {
                volume: "950 gm",
              },
            ],
            skuUniqueID: "113513",
            articleNumber: "130000390",
            default_variant: "N",
            isPriceEditAllowed: "Y",
            bulkQuantity: "",
            bulkThreshold: "",
            exclusive: "",
            minBulkQuantity: "",
            giftItem: "",
            name: "Amul Processed Cheese : 950 gms",
            tags: ["veg"],
            ribbon: "",
            excluded: "false",
            variantInfoTxtValue: "",
            image: "KCheese1kgAMUL2640XX270417_1_P.jpg",
            storeId: "10654",
            JIT: "Mulund",
            fcCode: "AAB0",
            OLD_price_SALE: "421.00",
            landingPrice: "415.860",
            OLD_maxQuantity: "3",
            OLD_discount: "7.06",
            discount: "7.06",
            lastUpdatedAt: "2023-10-30T06:00:37.251Z",
            startDate: "",
            endDate: "",
            isDeleteMapping: true,
            published: "true",
            proposedBy: "swapnil.a01",
            sptoolUserType: "",
            sellingPrice: "421.00",
          },
          type: "inclusion",
        },
        {
          serviceId: "5dc14fc5309fb9228f6b4921",
          serviceName: "price",
          eventName: "MRP_UPDATE",
          activityLog: [
            {
              userId: "master1",
              userGrp: "price",
              userRole: "master",
              type: "batchflip",
              action: "originFailed",
              assignedToUserGrp: "price",
              assignedToUserRole: "master",
              createdAt: "2024-06-13T15:40:53.802Z",
            },
            {
              userId: "master1",
              userGrp: "price",
              userRole: "master",
              action: "approved",
              type: "batchflip",
              createdAt: "2024-06-13T15:40:53.763Z",
            },
            {
              userId: "master1",
              userGrp: "price",
              userRole: "master",
              action: "created",
              type: "batchflip",
              createdAt: "2024-06-13T15:40:53.763Z",
            },
          ],
          fileIds: [],
          createdAt: "2024-06-13T15:40:53.763Z",
          updatedAt: "2024-06-13T15:40:53.802Z",
          expiresAt: "2025-06-12T18:29:59.000Z",
          isArchived: true,
          payload: {
            availabilityType: "A",
            isProductNotifiable: "N",
            homeorpup: "1",
            cod: "Y",
            groceryType: "v",
            defaultRank: "100401502",
            imagekey: "K/V/E/KVEGETABLES2pcs4xx230920",
            productImageKey: "KVEGETABLES2pcs4xx230920",
            binaryimgcode: "6144",
            imgcode: "4",
            price_MRP: "50.00",
            price_SALE: "38.00",
            save_price: "12.00",
            invstatus: "2",
            maxQuantity: "6",
            defining: [
              {
                volume: "2 pcs",
              },
            ],
            skuUniqueID: "400502",
            articleNumber: "250000064",
            buyable: "true",
            default_variant: "Y",
            isPriceEditAllowed: "Y",
            bulkQuantity: "",
            bulkThreshold: "",
            exclusive: "",
            minBulkQuantity: "",
            giftItem: "",
            name: "Fresh Sweet Corn : 2 Pieces",
            tags: ["hd", "veg"],
            ribbon: "",
            variantInfoTxtValue: "",
            image: "KVEGETABLES2pcs4xx230920_4_P.jpg",
            storeId: "10151",
            JIT: "Kanjur",
            fcCode: "AAA0",
            OLD_price_SALE: "38.00",
            landingPrice: "30.710",
            OLD_maxQuantity: "6",
            OLD_discount: "24.00",
            discount: "24.00",
            lastUpdatedAt: "2024-03-08T10:14:39.536Z",
            startDate: "",
            endDate: "",
            plantCode: "AAB0",
            FFMplantCode: "AB00",
            mrp: "",
            BOType: "",
            isDeleteMapping: false,
            inventoryStatus: "",
            published: "true",
            proposedBy: "sptool.n",
            sptoolUserType: "",
          },
          type: "batchflip",
        },
        {
          serviceId: "5d3020dd9ab0afa6094c803d",
          serviceName: "price",
          eventName: "SP_UPDATE",
          activityLog: [
            {
              userId: "master1",
              userGrp: "price",
              userRole: "master",
              type: "articleMapping",
              action: "originFailed",
              assignedToUserGrp: "price",
              assignedToUserRole: "master",
              createdAt: "2024-06-13T15:40:16.658Z",
            },
            {
              userId: "master1",
              userGrp: "price",
              userRole: "master",
              action: "approved",
              type: "articleMapping",
              createdAt: "2024-06-13T15:40:16.576Z",
            },
            {
              userId: "master1",
              userGrp: "price",
              userRole: "master",
              action: "created",
              type: "articleMapping",
              createdAt: "2024-06-13T15:40:16.576Z",
            },
          ],
          fileIds: [],
          createdAt: "2024-06-13T15:40:16.576Z",
          updatedAt: "2024-06-13T15:40:16.658Z",
          expiresAt: "2025-06-12T18:29:59.000Z",
          isArchived: true,
          payload: {
            availabilityType: "A",
            isProductNotifiable: "N",
            homeorpup: "1",
            cod: "Y",
            groceryType: "v",
            defaultRank: "100401502",
            imagekey: "K/V/E/KVEGETABLES2pcs4xx230920",
            productImageKey: "KVEGETABLES2pcs4xx230920",
            binaryimgcode: "6144",
            imgcode: "4",
            price_MRP: "50.00",
            price_SALE: "38.00",
            save_price: "12.00",
            invstatus: "2",
            maxQuantity: "6",
            defining: [
              {
                volume: "2 pcs",
              },
            ],
            skuUniqueID: "400502",
            articleNumber: "250000064",
            buyable: "true",
            default_variant: "Y",
            isPriceEditAllowed: "Y",
            bulkQuantity: "",
            bulkThreshold: "",
            exclusive: "",
            minBulkQuantity: "",
            giftItem: "",
            name: "Fresh Sweet Corn : 2 Pieces",
            tags: ["hd", "veg"],
            ribbon: "",
            variantInfoTxtValue: "",
            image: "KVEGETABLES2pcs4xx230920_4_P.jpg",
            storeId: "10151",
            JIT: "Kanjur",
            fcCode: "AAA0",
            OLD_price_SALE: "38.00",
            landingPrice: "30.710",
            OLD_maxQuantity: "6",
            OLD_discount: "24.00",
            discount: "24.00",
            lastUpdatedAt: "2024-03-08T10:14:39.536Z",
            startDate: "",
            endDate: "",
            plantCode: "AAA0",
            FFMplantCode: "AB00",
            mrp: "",
            BOType: "",
            isDeleteMapping: false,
            inventoryStatus: "",
            published: "true",
            proposedBy: "sptool.n",
            sptoolUserType: "",
            uniqueId: "AAA0_250000064_AB00_false_1718273419625_0mcv3hjrrwza",
          },
          type: "articleMapping",
        },
        {
          serviceId: "5d3020dd9ab0afa6094c803d",
          serviceName: "price",
          eventName: "SP_UPDATE",
          activityLog: [
            {
              userId: "master1",
              userGrp: "price",
              userRole: "master",
              type: "articleMapping",
              action: "originFailed",
              assignedToUserGrp: "price",
              assignedToUserRole: "master",
              createdAt: "2024-06-13T15:40:16.658Z",
            },
            {
              userId: "master1",
              userGrp: "price",
              userRole: "master",
              action: "approved",
              type: "articleMapping",
              createdAt: "2024-06-13T15:40:16.576Z",
            },
            {
              userId: "master1",
              userGrp: "price",
              userRole: "master",
              action: "created",
              type: "articleMapping",
              createdAt: "2024-06-13T15:40:16.576Z",
            },
          ],
          fileIds: [],
          createdAt: "2024-06-13T15:40:16.576Z",
          updatedAt: "2024-06-13T15:40:16.658Z",
          expiresAt: "2025-06-12T18:29:59.000Z",
          isArchived: true,
          payload: {
            availabilityType: "A",
            isProductNotifiable: "N",
            homeorpup: "1",
            cod: "Y",
            groceryType: "v",
            defaultRank: "100401502",
            imagekey: "K/V/E/KVEGETABLES2pcs4xx230920",
            productImageKey: "KVEGETABLES2pcs4xx230920",
            binaryimgcode: "6144",
            imgcode: "4",
            price_MRP: "50.00",
            price_SALE: "38.00",
            save_price: "12.00",
            invstatus: "2",
            maxQuantity: "6",
            defining: [
              {
                volume: "2 pcs",
              },
            ],
            skuUniqueID: "400502",
            articleNumber: "250000064",
            buyable: "true",
            default_variant: "Y",
            isPriceEditAllowed: "Y",
            bulkQuantity: "",
            bulkThreshold: "",
            exclusive: "",
            minBulkQuantity: "",
            giftItem: "",
            name: "Fresh Sweet Corn : 2 Pieces",
            tags: ["hd", "veg"],
            ribbon: "",
            variantInfoTxtValue: "",
            image: "KVEGETABLES2pcs4xx230920_4_P.jpg",
            storeId: "10151",
            JIT: "Kanjur",
            fcCode: "AAA0",
            OLD_price_SALE: "38.00",
            landingPrice: "30.710",
            OLD_maxQuantity: "6",
            OLD_discount: "24.00",
            discount: "24.00",
            lastUpdatedAt: "2024-03-08T10:14:39.536Z",
            startDate: "",
            endDate: "",
            plantCode: "AAB0",
            FFMplantCode: "AB00",
            mrp: "",
            BOType: "",
            isDeleteMapping: false,
            inventoryStatus: "",
            published: "true",
            proposedBy: "sptool.n",
            sptoolUserType: "",
            uniqueId: "AAB0_250000064_AB00_false_1718273419625_a7zjibuv1tg",
          },
          type: "articleMapping",
        },
      ];
      onApplyFilter(data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  return (
    <header className="header">
      <div className="icon-container">
        <Button onClick={handleOpen} variant="contained" startIcon={<FilterListRoundedIcon />}>
          filter
        </Button>
        <Modal
          open={open}
          onClose={filterApplied ? handleClose : () => {}}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <form
              onSubmit={e => {
                e.preventDefault(); // Prevent default form submission
                applyFilter(e); // Call applyFilter if validation passes
              }}
            >
              <div>
                <label htmlFor="start-date">Start Date:</label>
                <input
                  type="date"
                  id="start-date"
                  name="start-date"
                  value={from}
                  onChange={e => setFrom(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="end-date">End Date:</label>
                <input
                  type="date"
                  id="end-date"
                  name="end-date"
                  value={to}
                  onChange={e => setTo(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="module-select">Select Module:</label>
                <select
                  id="module-select"
                  value={selectedModule}
                  onChange={e => setSelectedModule(e.target.value)}
                  required
                >
                  <option value="">--Please choose an option--</option>
                  {modules.map(module => (
                    <option key={module} value={module}>
                      {module}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <button type="submit">Apply Filters</button>
              </div>
            </form>
          </Box>
        </Modal>
      </div>
      <div className="title-container"> {selectedModule} </div>
      <div></div>
    </header>
  );
}

export default Header;
