import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";

export default function DropdownMenuBar() {
  return (
    <div>
      <Dropdown>
        <DropdownTrigger>
          <Button
            variant="bordered"
            radius="none"
            className="bg-[#057793] text-white font-bold"
          >
            GBP
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Example with disabled actions"
          disabledKeys={["edit", "delete"]}
          className="bg-[#057793] text-white"
        >
          <DropdownItem key="new">EUR</DropdownItem>
          <DropdownItem key="copy">USD</DropdownItem>
          <DropdownItem key="edit">CAD</DropdownItem>
          <DropdownItem key="edit">SGD</DropdownItem>
          <DropdownItem key="edit">BTC</DropdownItem>
          {/* 
          <DropdownItem key="delete" className="text-danger" color="danger">
            Delete file
          </DropdownItem> */}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
