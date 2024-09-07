import {
  MagnifyingGlassIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import axios from 'axios';
import AddVendorDialog from "../../components/vendors/AddVendorDialog";
import UpdateVendorDialog from "../../components/vendors/UpdateVendorDialog";
import { useEffect, useState } from "react";
const API_URL = import.meta.env.VITE_URL;
import { formatDate } from "../../utils/utils"; 

const TABS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Monitored",
    value: "monitored",
  },
  {
    label: "Unmonitored",
    value: "unmonitored",
  },
];
 
const TABLE_HEAD = ["Vendor", "description","phone" , "added at", ""];

export default function Vendors() {
  const [vendors, setVendors] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedVendorId, setSelectedVendorId] = useState(null);

  const GetVendors = async () => {
    try {
      const res = await axios.get(`${API_URL}/admin/list-vendors`);
      console.log("vendors", res, res.data);
      if (res.status === 200) {
        setVendors(res.data);
      }
    } catch (error) {
      console.log("error while fetching vendors", error);
    }
  };

  const deleteVendor = async (id) => {
    try {
      console.log("delete vendor id", id);
      const res = await axios.delete(`${API_URL}/admin/delete/${id}`);
      if (res.status === 200) {
        alert(res.data.message || "Vendor deleted successfully");  // Show the server response in a browser alert
        GetVendors();  // Refresh the vendor list
      }
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message || "Failed to delete vendor");
    }
    setOpenDialog(false);  // Close the dialog after the operation
  };

  const openDeleteConfirmation = (id) => {
    setSelectedVendorId(id);
    setOpenDialog(true); // Open the confirmation dialog
  };

  const closeDialog = () => {
    setOpenDialog(false);  // Close the dialog if user cancels
  };

  useEffect(() => {
    console.log("api url", API_URL);
    GetVendors();
  }, []);

  return (
    <>
      {/* Delete Confirmation Dialog */}
      <Dialog open={openDialog} handler={closeDialog}>
        <DialogHeader>Confirm Deletion</DialogHeader>
        <DialogBody divider>
          Are you sure you want to delete this vendor? This action cannot be undone.
        </DialogBody>
        <DialogFooter>
          <Button variant="text" color="blue-gray" onClick={closeDialog}>
            Cancel
          </Button>
          <Button
            variant="gradient"
            color="red"
            onClick={() => deleteVendor(selectedVendorId)}
          >
            Delete
          </Button>
        </DialogFooter>
      </Dialog>

      <Card className="h-full w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-8 flex items-center justify-between gap-8">
            <div>
              <Typography variant="h5" className="text-orange-700">
                Vendors list
              </Typography>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <AddVendorDialog refresh={GetVendors} />
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <Tabs value="all" className="w-full md:w-max">
              <TabsHeader>
                {TABS.map(({ label, value }) => (
                  <Tab key={value} value={value}>
                    &nbsp;&nbsp;{label}&nbsp;&nbsp;
                  </Tab>
                ))}
              </TabsHeader>
            </Tabs>
            <div className="w-full md:w-72">
              <Input
                label="Search"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              />
            </div>
          </div>
        </CardHeader>
        <CardBody className="overflow-scroll px-0">
          <table className="mt-4 w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head, index) => (
                  <th
                    key={head}
                    className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                    >
                      {head}{" "}
                      {index !== TABLE_HEAD.length - 1 && (
                        <ChevronUpDownIcon
                          strokeWidth={2}
                          className="h-4 w-4"
                        />
                      )}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {vendors.map(
                ({ ID, Img, Name, Email, Description, Phone, created_at }, index) => {
                  const isLast = index === vendors.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={ID}>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <Avatar src={Img} alt={Name} size="sm" />
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {Name}
                            </Typography>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal opacity-70"
                            >
                              {Email}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {Description}
                          </Typography>
                        </div>
                      </td>

                      <td className={classes}>
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {Phone}
                          </Typography>
                        </div>
                      </td>

                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {formatDate(created_at)}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Tooltip content="Edit User">
                          <div>
                            <UpdateVendorDialog id={ID} refresh={GetVendors} />
                            <IconButton
                              variant="text"
                              onClick={() => openDeleteConfirmation(ID)}
                            >
                              <TrashIcon className="h-4 w-4 text-orange-700" />
                            </IconButton>
                          </div>
                        </Tooltip>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Typography variant="small" color="blue-gray" className="font-normal">
            Page 1 of 10
          </Typography>
          <div className="flex gap-2">
            <Button variant="outlined" color="orange" size="sm">
              Previous
            </Button>
            <Button variant="outlined" color="orange" size="sm">
              Next
            </Button>
          </div>
        </CardFooter>
      </Card>
    </>
  );
}
