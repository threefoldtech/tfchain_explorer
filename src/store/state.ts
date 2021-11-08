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

export interface IState {
  data: GetDataQueryType | null;
  loading: boolean;
  filters: {
    nodes: {
      nodeId: IInFilter;
      createdById: IInFilter;
      farmId: IInFilter;
      twinId: IInFilter;
      country: IInFilter;
      farmingPolicyId: IInFilter;
      hru: IRangeFilter;
      cru: IRangeFilter;
      mru: IRangeFilter;
      sru: IRangeFilter;
      uptime: IConditionFilter;
      countryFullName: IInFilter;
    };
    farms: {
      createdById: IInFilter;
      farmId: IInFilter;
      twinId: IInFilter;
      certificationType: IInFilter;
      name: IInFilter;
    };
  };
}

export default {
  data: null,
  loading: false,
  filters: {
    nodes: {
      nodeId: createInFilter(),
      createdById: createInFilter(),
      farmId: createInFilter(),
      twinId: createInFilter(),
      country: createInFilter(),
      farmingPolicyId: createInFilter(),
      hru: createRangeFilter(),
      cru: createRangeFilter(),
      sru: createRangeFilter(),
      mru: createRangeFilter(),
      uptime: createConditionFilter(),
      countryFullName: createInFilter(),
    },
    farms: {
      createdById: createInFilter(),
      farmId: createInFilter(),
      twinId: createInFilter(),
      certificationType: createInFilter(),
      name: createInFilter(),
    },
  },
} as IState;
