import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./breadcrumb";

interface BreadItem{
  name: string;
  path?: string;
}
const BreadCrumb = ({ breaditems }: {breaditems: BreadItem[]}) => {
  return (
    <Breadcrumb className="flex justify-start w-full">
      <BreadcrumbList>
        {breaditems?.map((item: any) => (
          <BreadcrumbItem key={item.name}>
            {item.path ? (
              <>
                <BreadcrumbLink href={item.path}>{item.name}</BreadcrumbLink>
                <BreadcrumbSeparator />
              </>
            ) : (
              <BreadcrumbPage>{item.name}</BreadcrumbPage>
              )}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadCrumb;
