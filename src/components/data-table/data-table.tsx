import './data-table.scss';

interface Props<T> {
  id: string;
  columns: Column<T>[];
  rows: T[];
  rowId: string;
  className?: string;
  borders?: Borders;
  fixedHeader?: boolean;
  removeHeader?: boolean;
  isRowDisable?: (row: T) => boolean;
}

interface Column<T> {
  key: string;
  name: string;
  width?: string;
  align?: 'left' | 'center' | 'right';
  customRender?: (row: T) => React.ReactNode;
}

interface Borders {
  table?: boolean;
  row?: boolean;
}

function DataTable<T>({
  columns,
  rows,
  rowId,
  borders = { row: true, table: true },
  removeHeader,
  className,
  fixedHeader,
  isRowDisable,
}: Props<T>) {
  const renderCellText = (cell: React.ReactNode) => {
    return <span>{cell}</span>;
  };

  const getTableClassNames = () => {
    const classNames: string[] = [];

    if (className) classNames.push(className);
    if (borders?.table) classNames.push('data-table-border');
    if (borders?.row) classNames.push('data-table-border-row');
    if (fixedHeader) classNames.push('fixed-header');

    return classNames.join(' ');
  };

  const getCellAlignClassName = (column: Column<T>) => {
    const textAlign = column.align ?? 'left';
    return `text-align-${textAlign}`;
  };

  const renderBodyCell = (row: T, column: Column<T>, cell: React.ReactNode, index: number) => {
    const content = column.customRender ? column.customRender(row) : renderCellText(cell);

    return (
      <td key={index} className={getCellAlignClassName(column)}>
        {content}
      </td>
    );
  };

  const renderHeaderCell = (column: Column<T>, index: number) => {
    return (
      <th key={index} className={getCellAlignClassName(column)} style={{ width: column.width }}>
        {column.name}
      </th>
    );
  };

  const renderHeader = () => {
    if (removeHeader) return;

    return (
      <thead>
        <tr>
          {columns.map((column: Column<T>, index: number) => {
            return renderHeaderCell(column, index);
          })}
        </tr>
      </thead>
    );
  };

  const renderBody = () => {
    return (
      <tbody>
        {rows.map((row) => {
          const id = row[rowId as keyof T] as number;
          const isDisable = isRowDisable && isRowDisable(row);

          return (
            <tr key={id} className={isDisable ? 'disable' : ''}>
              {columns.map((column: Column<T>, index: number) => {
                const cell = row[column.key as keyof T] as React.ReactNode;

                return renderBodyCell(row, column, cell, index);
              })}
            </tr>
          );
        })}
      </tbody>
    );
  };

  return (
    <div className="data-table-container">
      <table className={getTableClassNames()}>
        {!removeHeader && renderHeader()}
        {renderBody()}
      </table>
    </div>
  );
}

export default DataTable;
