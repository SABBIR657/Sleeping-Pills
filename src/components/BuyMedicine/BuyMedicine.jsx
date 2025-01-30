import NavSection from "../Home/NavSection";
import CommonWrapper from "../CommonWrapper";
import { Breadcrumbs, BreadcrumbItem, Image } from "@heroui/react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@heroui/table";

const BuyMedicine = () => {
  return (
    <div className="">
      <NavSection />

      <div className="mt-2 bg-[#E9ECEF] p-2 font-bold">
        <Breadcrumbs>
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Products</BreadcrumbItem>
          <BreadcrumbItem>Shopping Cart</BreadcrumbItem>
        </Breadcrumbs>
      </div>

      <div className="pt-3">
        <hr className="border-2 border-gray-700" />
      </div>

      <CommonWrapper>
        <div>
          <h1 className="font-bold text-lg">Shopping Cart</h1>
        </div>
        <div className="mt-4">
          <Table aria-label="Example static collection table">
            <TableHeader>
              <TableColumn>S.No</TableColumn>
              <TableColumn>Item</TableColumn>
              <TableColumn>Pack</TableColumn>
              <TableColumn>Price</TableColumn>
              <TableColumn>Total</TableColumn>
              <TableColumn>Remove</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="1">
                <TableCell>1</TableCell>
                <TableCell>
                  <div className="">
                    <Image
                      src="https://www.sleepingpillsuk.com/product-img/ambien.png"
                      width={100}
                      className="ml-48"
                    />
                  </div>
                  <div>
                    <p className="text-center">Zolpidem (Ambien) 10 mg x 30</p>
                  </div>
                </TableCell>
                <TableCell>Pack</TableCell>
                <TableCell>price</TableCell>
                <TableCell>$500</TableCell>
                <TableCell>icon</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CommonWrapper>
    </div>
  );
};

export default BuyMedicine;
