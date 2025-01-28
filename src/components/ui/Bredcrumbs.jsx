/* eslint-disable react/prop-types */
import {Breadcrumbs, BreadcrumbItem} from "@heroui/react";

const Bredcrumbs = ({item}) => {
  return (
    <div>
      <Breadcrumbs>
       <BreadcrumbItem>{item}</BreadcrumbItem>
      </Breadcrumbs>
    </div>
  );
}

export default Bredcrumbs;
