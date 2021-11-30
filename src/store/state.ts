import { GetDataQueryType } from "@/graphql/api";

interface IInFilter {
  enabled: boolean;
  value: string[];
}
const createInFilter = () => ({ enabled: false, value: [] });

interface IRangeFilter {
  enabled: boolean;
  value: {
    min: number;
    max: number;
  };
}
// prettier-ignore
const createRangeFilter = () => ({ enabled: false, value: { min: 0, max: Number.MAX_SAFE_INTEGER } });

interface IConditionFilter {
  enabled: boolean;
  value: boolean;
}

const createConditionFilter = () => ({ enabled: false, value: true });

interface IComparisonFilter {
  enabled: boolean;
  value: number;
}

const createComparisonFilter = () => ({ enabled: false, value: 0 });

export interface IState {
  data: GetDataQueryType | null;
  policies: { [key: string]: string };
  loading: boolean;
  filters: {
    nodes: {
      nodeId: IInFilter;
      createdById: IInFilter;
      farmId: IInFilter;
      twinId: IInFilter;
      country: IInFilter;
      farmingPolicyName: IInFilter;
      hru: IRangeFilter;
      cru: IRangeFilter;
      mru: IRangeFilter;
      sru: IRangeFilter;
      uptime: IConditionFilter;
      countryFullName: IInFilter;
      publicIPs: IComparisonFilter;
    };
    farms: {
      createdById: IInFilter;
      farmId: IInFilter;
      twinId: IInFilter;
      certificationType: IInFilter;
      name: IInFilter;
      publicIPsNo: IComparisonFilter;
    };
  };
}

export default {
  data: null,
  policies: {},
  loading: false,
  filters: {
    nodes: {
      nodeId: createInFilter(),
      createdById: createInFilter(),
      farmId: createInFilter(),
      twinId: createInFilter(),
      country: createInFilter(),
      farmingPolicyName: createInFilter(),
      hru: createRangeFilter(),
      cru: createRangeFilter(),
      sru: createRangeFilter(),
      mru: createRangeFilter(),
      uptime: createConditionFilter(),
      countryFullName: createInFilter(),
      publicIPs: createComparisonFilter(),
    },
    farms: {
      createdById: createInFilter(),
      farmId: createInFilter(),
      twinId: createInFilter(),
      certificationType: createInFilter(),
      name: createInFilter(),
      publicIPsNo: createComparisonFilter(),
    },
  },
} as IState;
