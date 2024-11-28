
export interface TableHeader {
    label: string
    key: string
}

export interface TableProps {
    data: any[],
    headers: TableHeader[]
}
