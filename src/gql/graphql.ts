/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Bool: { input: any; output: any; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](https://ecma-international.org/publications-and-standards/standards/ecma-404/). */
  JSON: { input: any; output: any; }
};

export type AIFreePrompt = IData & _IComponent & _IContent & _IElement & {
  __typename?: 'AIFreePrompt';
  AIFreePrompt?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type AIFreePrompt_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type AIFreePrompt_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type AIFreePromptAutocomplete = {
  __typename?: 'AIFreePromptAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type AIFreePromptFacet = {
  __typename?: 'AIFreePromptFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type AIFreePromptOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type AIFreePromptOutput = {
  __typename?: 'AIFreePromptOutput';
  autocomplete?: Maybe<AIFreePromptAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<AIFreePromptFacet>;
  items?: Maybe<Array<Maybe<AIFreePrompt>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type AIFreePromptOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AIFreePromptWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<AIFreePromptWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<AIFreePromptWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<AIFreePromptWhereInput>>>;
};

export type AIPersonalizedPrompt = IData & _IComponent & _IContent & _IElement & {
  __typename?: 'AIPersonalizedPrompt';
  AIPersonalizedPrompt?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type AIPersonalizedPrompt_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type AIPersonalizedPrompt_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type AIPersonalizedPromptAutocomplete = {
  __typename?: 'AIPersonalizedPromptAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type AIPersonalizedPromptFacet = {
  __typename?: 'AIPersonalizedPromptFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type AIPersonalizedPromptOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type AIPersonalizedPromptOutput = {
  __typename?: 'AIPersonalizedPromptOutput';
  autocomplete?: Maybe<AIPersonalizedPromptAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<AIPersonalizedPromptFacet>;
  items?: Maybe<Array<Maybe<AIPersonalizedPrompt>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type AIPersonalizedPromptOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AIPersonalizedPromptWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<AIPersonalizedPromptWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<AIPersonalizedPromptWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<AIPersonalizedPromptWhereInput>>>;
};

export type AnotherSearch = IData & _IContent & _IPage & {
  __typename?: 'AnotherSearch';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type AnotherSearch_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type AnotherSearch_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type AnotherSearchAutocomplete = {
  __typename?: 'AnotherSearchAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type AnotherSearchFacet = {
  __typename?: 'AnotherSearchFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type AnotherSearchOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type AnotherSearchOutput = {
  __typename?: 'AnotherSearchOutput';
  autocomplete?: Maybe<AnotherSearchAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<AnotherSearchFacet>;
  items?: Maybe<Array<Maybe<AnotherSearch>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type AnotherSearchOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AnotherSearchWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<AnotherSearchWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<AnotherSearchWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<AnotherSearchWhereInput>>>;
};

export type ArticleGroupPage = IData & _IContent & _IPage & {
  __typename?: 'ArticleGroupPage';
  LandingPageSeoSettings?: Maybe<PageSeoSettingsProperty>;
  MainContent?: Maybe<Array<Maybe<_IContent>>>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  articleGroupIntro?: Maybe<RichText>;
  articleGroupTitle?: Maybe<Scalars['String']['output']>;
};


export type ArticleGroupPage_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type ArticleGroupPage_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ArticleGroupPageAutocomplete = {
  __typename?: 'ArticleGroupPageAutocomplete';
  LandingPageSeoSettings?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  MainContent?: Maybe<_IContentAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  articleGroupIntro?: Maybe<RichTextAutocomplete>;
  articleGroupTitle?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ArticleGroupPageAutocompleteLandingPageSeoSettingsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ArticleGroupPageAutocompletearticleGroupTitleArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ArticleGroupPageFacet = {
  __typename?: 'ArticleGroupPageFacet';
  LandingPageSeoSettings?: Maybe<Array<Maybe<StringFacet>>>;
  MainContent?: Maybe<_IContentFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
  articleGroupIntro?: Maybe<RichTextFacet>;
  articleGroupTitle?: Maybe<Array<Maybe<StringFacet>>>;
};


export type ArticleGroupPageFacetLandingPageSeoSettingsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ArticleGroupPageFacetarticleGroupTitleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ArticleGroupPageOrderByInput = {
  LandingPageSeoSettings?: InputMaybe<OrderBy>;
  MainContent?: InputMaybe<_IContentOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  articleGroupIntro?: InputMaybe<RichTextOrderByInput>;
  articleGroupTitle?: InputMaybe<OrderBy>;
};

export type ArticleGroupPageOutput = {
  __typename?: 'ArticleGroupPageOutput';
  autocomplete?: Maybe<ArticleGroupPageAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ArticleGroupPageFacet>;
  items?: Maybe<Array<Maybe<ArticleGroupPage>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ArticleGroupPageOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ArticleGroupPageWhereInput = {
  LandingPageSeoSettings?: InputMaybe<StringFilterInput>;
  MainContent?: InputMaybe<_IContentWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<ArticleGroupPageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ArticleGroupPageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ArticleGroupPageWhereInput>>>;
  articleGroupIntro?: InputMaybe<RichTextWhereInput>;
  articleGroupTitle?: InputMaybe<StringFilterInput>;
};

export type ArticleListElement = IData & _IComponent & _IContent & _IElement & {
  __typename?: 'ArticleListElement';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  articleListCount?: Maybe<Scalars['Int']['output']>;
};


export type ArticleListElement_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type ArticleListElement_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ArticleListElementAutocomplete = {
  __typename?: 'ArticleListElementAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type ArticleListElementFacet = {
  __typename?: 'ArticleListElementFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type ArticleListElementOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type ArticleListElementOutput = {
  __typename?: 'ArticleListElementOutput';
  autocomplete?: Maybe<ArticleListElementAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ArticleListElementFacet>;
  items?: Maybe<Array<Maybe<ArticleListElement>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ArticleListElementOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ArticleListElementWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<ArticleListElementWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ArticleListElementWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ArticleListElementWhereInput>>>;
};

export type ArticlePage = IData & _IContent & _IPage & {
  __typename?: 'ArticlePage';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  articleAuthors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  articleBody?: Maybe<RichText>;
  articleHeroImage?: Maybe<ContentReference>;
  articleSeoSettings?: Maybe<PageSeoSettingsProperty>;
  articleSummary?: Maybe<RichText>;
  articleTitle?: Maybe<Scalars['String']['output']>;
};


export type ArticlePage_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type ArticlePage_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ArticlePageAutocomplete = {
  __typename?: 'ArticlePageAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  articleBody?: Maybe<RichTextAutocomplete>;
  articleHeroImage?: Maybe<ContentReferenceAutocomplete>;
  articleSeoSettings?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  articleSummary?: Maybe<RichTextAutocomplete>;
};


export type ArticlePageAutocompletearticleSeoSettingsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ArticlePageFacet = {
  __typename?: 'ArticlePageFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
  articleBody?: Maybe<RichTextFacet>;
  articleHeroImage?: Maybe<ContentReferenceFacet>;
  articleSeoSettings?: Maybe<Array<Maybe<StringFacet>>>;
  articleSummary?: Maybe<RichTextFacet>;
};


export type ArticlePageFacetarticleSeoSettingsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ArticlePageOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  articleBody?: InputMaybe<RichTextOrderByInput>;
  articleHeroImage?: InputMaybe<ContentReferenceOrderByInput>;
  articleSeoSettings?: InputMaybe<OrderBy>;
  articleSummary?: InputMaybe<RichTextOrderByInput>;
};

export type ArticlePageOutput = {
  __typename?: 'ArticlePageOutput';
  autocomplete?: Maybe<ArticlePageAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ArticlePageFacet>;
  items?: Maybe<Array<Maybe<ArticlePage>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ArticlePageOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ArticlePageWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<ArticlePageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ArticlePageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ArticlePageWhereInput>>>;
  articleBody?: InputMaybe<RichTextWhereInput>;
  articleHeroImage?: InputMaybe<ContentReferenceWhereInput>;
  articleSeoSettings?: InputMaybe<StringFilterInput>;
  articleSummary?: InputMaybe<RichTextWhereInput>;
};

export type BannerBlock = IData & _IComponent & _IContent & {
  __typename?: 'BannerBlock';
  Title?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type BannerBlock_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type BannerBlock_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type BannerBlockAutocomplete = {
  __typename?: 'BannerBlockAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type BannerBlockFacet = {
  __typename?: 'BannerBlockFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type BannerBlockOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type BannerBlockOutput = {
  __typename?: 'BannerBlockOutput';
  autocomplete?: Maybe<BannerBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<BannerBlockFacet>;
  items?: Maybe<Array<Maybe<BannerBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type BannerBlockOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BannerBlockWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<BannerBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<BannerBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<BannerBlockWhereInput>>>;
};

export type BlankExperience = IData & _IContent & _IExperience & _IPage & {
  __typename?: 'BlankExperience';
  SeoSettings?: Maybe<PageSeoSettingsProperty>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  composition?: Maybe<CompositionStructureNode>;
};


export type BlankExperience_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type BlankExperience_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type BlankExperienceAutocomplete = {
  __typename?: 'BlankExperienceAutocomplete';
  SeoSettings?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  composition?: Maybe<CompositionStructureNodeAutocomplete>;
};


export type BlankExperienceAutocompleteSeoSettingsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type BlankExperienceFacet = {
  __typename?: 'BlankExperienceFacet';
  SeoSettings?: Maybe<Array<Maybe<StringFacet>>>;
  _metadata?: Maybe<IContentMetadataFacet>;
  composition?: Maybe<CompositionStructureNodeFacet>;
};


export type BlankExperienceFacetSeoSettingsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type BlankExperienceOrderByInput = {
  SeoSettings?: InputMaybe<OrderBy>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  composition?: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type BlankExperienceOutput = {
  __typename?: 'BlankExperienceOutput';
  autocomplete?: Maybe<BlankExperienceAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<BlankExperienceFacet>;
  items?: Maybe<Array<Maybe<BlankExperience>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type BlankExperienceOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BlankExperienceWhereInput = {
  SeoSettings?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<BlankExperienceWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<BlankExperienceWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<BlankExperienceWhereInput>>>;
  composition?: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type BlankSection = IData & _IComponent & _IContent & _ISection & {
  __typename?: 'BlankSection';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  composition?: Maybe<CompositionStructureNode>;
};


export type BlankSection_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type BlankSection_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type BlankSectionAutocomplete = {
  __typename?: 'BlankSectionAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  composition?: Maybe<CompositionStructureNodeAutocomplete>;
};

export type BlankSectionFacet = {
  __typename?: 'BlankSectionFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
  composition?: Maybe<CompositionStructureNodeFacet>;
};

export type BlankSectionOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  composition?: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type BlankSectionOutput = {
  __typename?: 'BlankSectionOutput';
  autocomplete?: Maybe<BlankSectionAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<BlankSectionFacet>;
  items?: Maybe<Array<Maybe<BlankSection>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type BlankSectionOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BlankSectionWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<BlankSectionWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<BlankSectionWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<BlankSectionWhereInput>>>;
  composition?: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type BlockTest = IData & _IComponent & _IContent & {
  __typename?: 'BlockTest';
  Title?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type BlockTest_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type BlockTest_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type BlockTestAutocomplete = {
  __typename?: 'BlockTestAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type BlockTestFacet = {
  __typename?: 'BlockTestFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type BlockTestOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type BlockTestOutput = {
  __typename?: 'BlockTestOutput';
  autocomplete?: Maybe<BlockTestAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<BlockTestFacet>;
  items?: Maybe<Array<Maybe<BlockTest>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type BlockTestOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BlockTestWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<BlockTestWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<BlockTestWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<BlockTestWhereInput>>>;
};

export type ButtonBlock = IData & _IComponent & _IContent & {
  __typename?: 'ButtonBlock';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  buttonType?: Maybe<Scalars['String']['output']>;
  className?: Maybe<Scalars['String']['output']>;
  link?: Maybe<ContentUrl>;
  text?: Maybe<Scalars['String']['output']>;
  variant?: Maybe<Scalars['String']['output']>;
};


export type ButtonBlock_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type ButtonBlock_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ButtonBlockAutocomplete = {
  __typename?: 'ButtonBlockAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  link?: Maybe<ContentUrlAutocomplete>;
};

export type ButtonBlockFacet = {
  __typename?: 'ButtonBlockFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
  link?: Maybe<ContentUrlFacet>;
};

export type ButtonBlockOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  link?: InputMaybe<ContentUrlOrderByInput>;
};

export type ButtonBlockOutput = {
  __typename?: 'ButtonBlockOutput';
  autocomplete?: Maybe<ButtonBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ButtonBlockFacet>;
  items?: Maybe<Array<Maybe<ButtonBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ButtonBlockOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ButtonBlockProperty = {
  __typename?: 'ButtonBlockProperty';
  buttonType?: Maybe<Scalars['String']['output']>;
  className?: Maybe<Scalars['String']['output']>;
  link?: Maybe<ContentUrl>;
  text?: Maybe<Scalars['String']['output']>;
  variant?: Maybe<Scalars['String']['output']>;
};

export type ButtonBlockPropertyAutocomplete = {
  __typename?: 'ButtonBlockPropertyAutocomplete';
  link?: Maybe<ContentUrlAutocomplete>;
};

export type ButtonBlockPropertyFacet = {
  __typename?: 'ButtonBlockPropertyFacet';
  link?: Maybe<ContentUrlFacet>;
};

export type ButtonBlockPropertyOrderByInput = {
  link?: InputMaybe<ContentUrlOrderByInput>;
};

export type ButtonBlockPropertyWhereInput = {
  link?: InputMaybe<ContentUrlWhereInput>;
};

export type ButtonBlockWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<ButtonBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ButtonBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ButtonBlockWhereInput>>>;
  link?: InputMaybe<ContentUrlWhereInput>;
};

export type CTAElement = IData & _IComponent & _IContent & _IElement & {
  __typename?: 'CTAElement';
  Link?: Maybe<ContentUrl>;
  Text?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type CTAElement_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type CTAElement_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type CTAElementAutocomplete = {
  __typename?: 'CTAElementAutocomplete';
  Link?: Maybe<ContentUrlAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type CTAElementFacet = {
  __typename?: 'CTAElementFacet';
  Link?: Maybe<ContentUrlFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type CTAElementOrderByInput = {
  Link?: InputMaybe<ContentUrlOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type CTAElementOutput = {
  __typename?: 'CTAElementOutput';
  autocomplete?: Maybe<CTAElementAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<CTAElementFacet>;
  items?: Maybe<Array<Maybe<CTAElement>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type CTAElementOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CTAElementWhereInput = {
  Link?: InputMaybe<ContentUrlWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<CTAElementWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<CTAElementWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<CTAElementWhereInput>>>;
};

export type CardBlock = IData & _IComponent & _IContent & {
  __typename?: 'CardBlock';
  CardButton?: Maybe<ButtonBlockProperty>;
  CardColor?: Maybe<Scalars['String']['output']>;
  CardDescription?: Maybe<RichText>;
  CardHeading?: Maybe<Scalars['String']['output']>;
  CardIcon?: Maybe<ContentReference>;
  CardImage?: Maybe<ContentReference>;
  CardImageLayout?: Maybe<Scalars['String']['output']>;
  CardSubheading?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type CardBlock_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type CardBlock_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type CardBlockAutocomplete = {
  __typename?: 'CardBlockAutocomplete';
  CardButton?: Maybe<ButtonBlockPropertyAutocomplete>;
  CardDescription?: Maybe<RichTextAutocomplete>;
  CardIcon?: Maybe<ContentReferenceAutocomplete>;
  CardImage?: Maybe<ContentReferenceAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type CardBlockFacet = {
  __typename?: 'CardBlockFacet';
  CardButton?: Maybe<ButtonBlockPropertyFacet>;
  CardDescription?: Maybe<RichTextFacet>;
  CardIcon?: Maybe<ContentReferenceFacet>;
  CardImage?: Maybe<ContentReferenceFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type CardBlockOrderByInput = {
  CardButton?: InputMaybe<ButtonBlockPropertyOrderByInput>;
  CardDescription?: InputMaybe<RichTextOrderByInput>;
  CardIcon?: InputMaybe<ContentReferenceOrderByInput>;
  CardImage?: InputMaybe<ContentReferenceOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type CardBlockOutput = {
  __typename?: 'CardBlockOutput';
  autocomplete?: Maybe<CardBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<CardBlockFacet>;
  items?: Maybe<Array<Maybe<CardBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type CardBlockOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CardBlockWhereInput = {
  CardButton?: InputMaybe<ButtonBlockPropertyWhereInput>;
  CardDescription?: InputMaybe<RichTextWhereInput>;
  CardIcon?: InputMaybe<ContentReferenceWhereInput>;
  CardImage?: InputMaybe<ContentReferenceWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<CardBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<CardBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<CardBlockWhereInput>>>;
};

export type CompositionDisplaySetting = {
  __typename?: 'CompositionDisplaySetting';
  key?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type CompositionDisplaySettingAutocomplete = {
  __typename?: 'CompositionDisplaySettingAutocomplete';
  key?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  value?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type CompositionDisplaySettingAutocompletekeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionDisplaySettingAutocompletevalueArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type CompositionDisplaySettingFacet = {
  __typename?: 'CompositionDisplaySettingFacet';
  key?: Maybe<Array<Maybe<StringFacet>>>;
  value?: Maybe<Array<Maybe<StringFacet>>>;
};


export type CompositionDisplaySettingFacetkeyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionDisplaySettingFacetvalueArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type CompositionDisplaySettingOrderByInput = {
  key?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

export type CompositionDisplaySettingWhereInput = {
  key?: InputMaybe<StringFilterInput>;
  value?: InputMaybe<StringFilterInput>;
};

export type CompositionElementNode = ICompositionElementNode & ICompositionNode & {
  __typename?: 'CompositionElementNode';
  displayName?: Maybe<Scalars['String']['output']>;
  displaySettings?: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey?: Maybe<Scalars['String']['output']>;
  element?: Maybe<_IElement>;
  key?: Maybe<Scalars['String']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type CompositionNode = ICompositionNode & {
  __typename?: 'CompositionNode';
  displayName?: Maybe<Scalars['String']['output']>;
  displaySettings?: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type CompositionStructureNode = ICompositionNode & ICompositionStructureNode & {
  __typename?: 'CompositionStructureNode';
  displayName?: Maybe<Scalars['String']['output']>;
  displaySettings?: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  nodes?: Maybe<Array<Maybe<ICompositionNode>>>;
  type?: Maybe<Scalars['String']['output']>;
};

export type CompositionStructureNodeAutocomplete = {
  __typename?: 'CompositionStructureNodeAutocomplete';
  displayName?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  displaySettings?: Maybe<CompositionDisplaySettingAutocomplete>;
  displayTemplateKey?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  key?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  nodeType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  nodes?: Maybe<ICompositionNodeAutocomplete>;
  type?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type CompositionStructureNodeAutocompletedisplayNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionStructureNodeAutocompletedisplayTemplateKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionStructureNodeAutocompletekeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionStructureNodeAutocompletenodeTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionStructureNodeAutocompletetypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type CompositionStructureNodeFacet = {
  __typename?: 'CompositionStructureNodeFacet';
  displayName?: Maybe<Array<Maybe<StringFacet>>>;
  displaySettings?: Maybe<CompositionDisplaySettingFacet>;
  displayTemplateKey?: Maybe<Array<Maybe<StringFacet>>>;
  key?: Maybe<Array<Maybe<StringFacet>>>;
  nodeType?: Maybe<Array<Maybe<StringFacet>>>;
  nodes?: Maybe<ICompositionNodeFacet>;
  type?: Maybe<Array<Maybe<StringFacet>>>;
};


export type CompositionStructureNodeFacetdisplayNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionStructureNodeFacetdisplayTemplateKeyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionStructureNodeFacetkeyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionStructureNodeFacetnodeTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionStructureNodeFacettypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type CompositionStructureNodeOrderByInput = {
  displayName?: InputMaybe<OrderBy>;
  displaySettings?: InputMaybe<CompositionDisplaySettingOrderByInput>;
  displayTemplateKey?: InputMaybe<OrderBy>;
  key?: InputMaybe<OrderBy>;
  nodeType?: InputMaybe<OrderBy>;
  nodes?: InputMaybe<ICompositionNodeOrderByInput>;
  type?: InputMaybe<OrderBy>;
};

export type CompositionStructureNodeWhereInput = {
  displayName?: InputMaybe<StringFilterInput>;
  displaySettings?: InputMaybe<CompositionDisplaySettingWhereInput>;
  displayTemplateKey?: InputMaybe<StringFilterInput>;
  key?: InputMaybe<StringFilterInput>;
  nodeType?: InputMaybe<StringFilterInput>;
  nodes?: InputMaybe<ICompositionNodeWhereInput>;
  type?: InputMaybe<StringFilterInput>;
};

export type ContentMetadata = IContentMetadata & {
  __typename?: 'ContentMetadata';
  created?: Maybe<Scalars['DateTime']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  published?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrl>;
  version?: Maybe<Scalars['String']['output']>;
};


export type ContentMetadatadisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type ContentReference = {
  __typename?: 'ContentReference';
  key?: Maybe<Scalars['String']['output']>;
  url?: Maybe<ContentUrl>;
};

export type ContentReferenceAutocomplete = {
  __typename?: 'ContentReferenceAutocomplete';
  key?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrlAutocomplete>;
};


export type ContentReferenceAutocompletekeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ContentReferenceFacet = {
  __typename?: 'ContentReferenceFacet';
  key?: Maybe<Array<Maybe<StringFacet>>>;
  url?: Maybe<ContentUrlFacet>;
};


export type ContentReferenceFacetkeyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ContentReferenceOrderByInput = {
  key?: InputMaybe<OrderBy>;
  url?: InputMaybe<ContentUrlOrderByInput>;
};

export type ContentReferenceWhereInput = {
  key?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<ContentUrlWhereInput>;
};

export type ContentUrl = {
  __typename?: 'ContentUrl';
  base?: Maybe<Scalars['String']['output']>;
  default?: Maybe<Scalars['String']['output']>;
  hierarchical?: Maybe<Scalars['String']['output']>;
  internal?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ContentUrlAutocomplete = {
  __typename?: 'ContentUrlAutocomplete';
  base?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  default?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  hierarchical?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  internal?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  type?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ContentUrlAutocompletebaseArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompletedefaultArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompletehierarchicalArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompleteinternalArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompletetypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ContentUrlFacet = {
  __typename?: 'ContentUrlFacet';
  base?: Maybe<Array<Maybe<StringFacet>>>;
  default?: Maybe<Array<Maybe<StringFacet>>>;
  hierarchical?: Maybe<Array<Maybe<StringFacet>>>;
  internal?: Maybe<Array<Maybe<StringFacet>>>;
  type?: Maybe<Array<Maybe<StringFacet>>>;
};


export type ContentUrlFacetbaseArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacetdefaultArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacethierarchicalArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacetinternalArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacettypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ContentUrlOrderByInput = {
  base?: InputMaybe<OrderBy>;
  default?: InputMaybe<OrderBy>;
  hierarchical?: InputMaybe<OrderBy>;
  internal?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
};

export type ContentUrlWhereInput = {
  base?: InputMaybe<StringFilterInput>;
  default?: InputMaybe<StringFilterInput>;
  hierarchical?: InputMaybe<StringFilterInput>;
  internal?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
};

export type Data = IData & {
  __typename?: 'Data';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type Data_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Data_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type DataOrderByInput = {
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type DataOutput = {
  __typename?: 'DataOutput';
  cursor?: Maybe<Scalars['String']['output']>;
  items?: Maybe<Array<Maybe<IData>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type DataOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DataWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<DataWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<DataWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<DataWhereInput>>>;
};

export type DateFacet = {
  __typename?: 'DateFacet';
  count?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export enum DateFacetUnit {
  /** Defined as 24 hours (86,400,000 milliseconds). All days begin at the earliest possible time, which is usually 00:00:00 (midnight). */
  DAY = 'DAY',
  /** Defined as 60 minutes each (3,600,000 milliseconds). All hours begin at 00 minutes and 00 seconds. */
  HOUR = 'HOUR',
  /** Defined as 1000 milliseconds each. */
  MINUTE = 'MINUTE'
}

export type DateFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost?: InputMaybe<Scalars['Int']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq?: InputMaybe<Scalars['Date']['input']>;
  /** `exist` matches results that have this field. */
  exist?: InputMaybe<Scalars['Boolean']['input']>;
  /** `gt` retrieves results with matches that have a value which is `greater than` it. */
  gt?: InputMaybe<Scalars['Date']['input']>;
  /** `gte` retrieves results with matches that have a value which is `greater than or equal to` it. */
  gte?: InputMaybe<Scalars['Date']['input']>;
  /** `lt` retrieves results with matches that have a value which is `lower than` it. */
  lt?: InputMaybe<Scalars['Date']['input']>;
  /** `lte` retrieves results with matches that have a value which is `lower than or equal to` it. */
  lte?: InputMaybe<Scalars['Date']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq?: InputMaybe<Scalars['Date']['input']>;
};

export type DefaultImage = IData & _IContent & _IImage & _IMedia & {
  __typename?: 'DefaultImage';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type DefaultImage_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type DefaultImage_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type DefaultImageAutocomplete = {
  __typename?: 'DefaultImageAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type DefaultImageFacet = {
  __typename?: 'DefaultImageFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type DefaultImageOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type DefaultImageOutput = {
  __typename?: 'DefaultImageOutput';
  autocomplete?: Maybe<DefaultImageAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<DefaultImageFacet>;
  items?: Maybe<Array<Maybe<DefaultImage>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type DefaultImageOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DefaultImageWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<DefaultImageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<DefaultImageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<DefaultImageWhereInput>>>;
};

export type DefaultVideo = IData & _IContent & _IMedia & _IVideo & {
  __typename?: 'DefaultVideo';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type DefaultVideo_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type DefaultVideo_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type DefaultVideoAutocomplete = {
  __typename?: 'DefaultVideoAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type DefaultVideoFacet = {
  __typename?: 'DefaultVideoFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type DefaultVideoOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type DefaultVideoOutput = {
  __typename?: 'DefaultVideoOutput';
  autocomplete?: Maybe<DefaultVideoAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<DefaultVideoFacet>;
  items?: Maybe<Array<Maybe<DefaultVideo>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type DefaultVideoOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DefaultVideoWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<DefaultVideoWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<DefaultVideoWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<DefaultVideoWhereInput>>>;
};

export type Dictionary = IData & _IComponent & _IContent & {
  __typename?: 'Dictionary';
  DictionaryItems?: Maybe<Array<Maybe<DictionaryItemProperty>>>;
  DictionaryKey?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type DictionaryDictionaryKeyArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Dictionary_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Dictionary_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type DictionaryAutocomplete = {
  __typename?: 'DictionaryAutocomplete';
  DictionaryItems?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};


export type DictionaryAutocompleteDictionaryItemsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type DictionaryFacet = {
  __typename?: 'DictionaryFacet';
  DictionaryItems?: Maybe<Array<Maybe<StringFacet>>>;
  DictionaryKey?: Maybe<Array<Maybe<StringFacet>>>;
  _metadata?: Maybe<IContentMetadataFacet>;
};


export type DictionaryFacetDictionaryItemsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DictionaryFacetDictionaryKeyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type DictionaryItem = IData & _IComponent & _IContent & {
  __typename?: 'DictionaryItem';
  DictionaryItemKey?: Maybe<Scalars['String']['output']>;
  DictionaryItemValue?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type DictionaryItem_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type DictionaryItem_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type DictionaryItemAutocomplete = {
  __typename?: 'DictionaryItemAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type DictionaryItemFacet = {
  __typename?: 'DictionaryItemFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type DictionaryItemOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type DictionaryItemOutput = {
  __typename?: 'DictionaryItemOutput';
  autocomplete?: Maybe<DictionaryItemAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<DictionaryItemFacet>;
  items?: Maybe<Array<Maybe<DictionaryItem>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type DictionaryItemOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DictionaryItemProperty = {
  __typename?: 'DictionaryItemProperty';
  DictionaryItemKey?: Maybe<Scalars['String']['output']>;
  DictionaryItemValue?: Maybe<Scalars['String']['output']>;
};

export type DictionaryItemWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<DictionaryItemWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<DictionaryItemWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<DictionaryItemWhereInput>>>;
};

export type DictionaryOrderByInput = {
  DictionaryItems?: InputMaybe<OrderBy>;
  DictionaryKey?: InputMaybe<OrderBy>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type DictionaryOutput = {
  __typename?: 'DictionaryOutput';
  autocomplete?: Maybe<DictionaryAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<DictionaryFacet>;
  items?: Maybe<Array<Maybe<Dictionary>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type DictionaryOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DictionaryWhereInput = {
  DictionaryItems?: InputMaybe<StringFilterInput>;
  DictionaryKey?: InputMaybe<SearchableStringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<DictionaryWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<DictionaryWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<DictionaryWhereInput>>>;
};

export type FoodSuggestionItem = IData & _IComponent & _IContent & _IElement & {
  __typename?: 'FoodSuggestionItem';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  block?: Maybe<Scalars['String']['output']>;
};


export type FoodSuggestionItem_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type FoodSuggestionItem_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type FoodSuggestionItemAutocomplete = {
  __typename?: 'FoodSuggestionItemAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type FoodSuggestionItemBlock = IData & _IComponent & _IContent & {
  __typename?: 'FoodSuggestionItemBlock';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type FoodSuggestionItemBlock_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type FoodSuggestionItemBlock_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type FoodSuggestionItemBlockAutocomplete = {
  __typename?: 'FoodSuggestionItemBlockAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type FoodSuggestionItemBlockFacet = {
  __typename?: 'FoodSuggestionItemBlockFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type FoodSuggestionItemBlockOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type FoodSuggestionItemBlockOutput = {
  __typename?: 'FoodSuggestionItemBlockOutput';
  autocomplete?: Maybe<FoodSuggestionItemBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<FoodSuggestionItemBlockFacet>;
  items?: Maybe<Array<Maybe<FoodSuggestionItemBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type FoodSuggestionItemBlockOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FoodSuggestionItemBlockWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<FoodSuggestionItemBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<FoodSuggestionItemBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<FoodSuggestionItemBlockWhereInput>>>;
};

export type FoodSuggestionItemFacet = {
  __typename?: 'FoodSuggestionItemFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type FoodSuggestionItemOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type FoodSuggestionItemOutput = {
  __typename?: 'FoodSuggestionItemOutput';
  autocomplete?: Maybe<FoodSuggestionItemAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<FoodSuggestionItemFacet>;
  items?: Maybe<Array<Maybe<FoodSuggestionItem>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type FoodSuggestionItemOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FoodSuggestionItemWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<FoodSuggestionItemWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<FoodSuggestionItemWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<FoodSuggestionItemWhereInput>>>;
};

export type GenericMedia = IData & _IContent & _IMedia & {
  __typename?: 'GenericMedia';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type GenericMedia_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type GenericMedia_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type GenericMediaAutocomplete = {
  __typename?: 'GenericMediaAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type GenericMediaFacet = {
  __typename?: 'GenericMediaFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type GenericMediaOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type GenericMediaOutput = {
  __typename?: 'GenericMediaOutput';
  autocomplete?: Maybe<GenericMediaAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<GenericMediaFacet>;
  items?: Maybe<Array<Maybe<GenericMedia>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type GenericMediaOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GenericMediaWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<GenericMediaWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<GenericMediaWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<GenericMediaWhereInput>>>;
};

export type HeaderBlock = IData & _IComponent & _IContent & {
  __typename?: 'HeaderBlock';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  site_logo?: Maybe<ContentReference>;
  site_logo_dark?: Maybe<ContentReference>;
  site_main_navigation?: Maybe<Array<Maybe<_IContent>>>;
  site_utility_navigation?: Maybe<Array<Maybe<_IContent>>>;
};


export type HeaderBlock_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type HeaderBlock_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type HeaderBlockAutocomplete = {
  __typename?: 'HeaderBlockAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  site_logo?: Maybe<ContentReferenceAutocomplete>;
  site_logo_dark?: Maybe<ContentReferenceAutocomplete>;
  site_main_navigation?: Maybe<_IContentAutocomplete>;
  site_utility_navigation?: Maybe<_IContentAutocomplete>;
};

export type HeaderBlockFacet = {
  __typename?: 'HeaderBlockFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
  site_logo?: Maybe<ContentReferenceFacet>;
  site_logo_dark?: Maybe<ContentReferenceFacet>;
  site_main_navigation?: Maybe<_IContentFacet>;
  site_utility_navigation?: Maybe<_IContentFacet>;
};

export type HeaderBlockOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  site_logo?: InputMaybe<ContentReferenceOrderByInput>;
  site_logo_dark?: InputMaybe<ContentReferenceOrderByInput>;
  site_main_navigation?: InputMaybe<_IContentOrderByInput>;
  site_utility_navigation?: InputMaybe<_IContentOrderByInput>;
};

export type HeaderBlockOutput = {
  __typename?: 'HeaderBlockOutput';
  autocomplete?: Maybe<HeaderBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<HeaderBlockFacet>;
  items?: Maybe<Array<Maybe<HeaderBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type HeaderBlockOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type HeaderBlockWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<HeaderBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<HeaderBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<HeaderBlockWhereInput>>>;
  site_logo?: InputMaybe<ContentReferenceWhereInput>;
  site_logo_dark?: InputMaybe<ContentReferenceWhereInput>;
  site_main_navigation?: InputMaybe<_IContentWhereInput>;
  site_utility_navigation?: InputMaybe<_IContentWhereInput>;
};

export type HeadingElement = IData & _IComponent & _IContent & _IElement & {
  __typename?: 'HeadingElement';
  AIPrompt?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  headingText?: Maybe<Scalars['String']['output']>;
};


export type HeadingElement_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type HeadingElement_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type HeadingElementAutocomplete = {
  __typename?: 'HeadingElementAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type HeadingElementFacet = {
  __typename?: 'HeadingElementFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type HeadingElementOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type HeadingElementOutput = {
  __typename?: 'HeadingElementOutput';
  autocomplete?: Maybe<HeadingElementAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<HeadingElementFacet>;
  items?: Maybe<Array<Maybe<HeadingElement>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type HeadingElementOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type HeadingElementWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<HeadingElementWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<HeadingElementWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<HeadingElementWhereInput>>>;
};

/** Options for highlighting */
export type HighlightOptions = {
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  endToken?: InputMaybe<Scalars['String']['input']>;
  startToken?: InputMaybe<Scalars['String']['input']>;
};

export type ICompositionElementNode = {
  displayName?: Maybe<Scalars['String']['output']>;
  displaySettings?: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey?: Maybe<Scalars['String']['output']>;
  element?: Maybe<_IElement>;
  key?: Maybe<Scalars['String']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ICompositionNode = {
  displayName?: Maybe<Scalars['String']['output']>;
  displaySettings?: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ICompositionNodeAutocomplete = {
  __typename?: 'ICompositionNodeAutocomplete';
  displayName?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  displaySettings?: Maybe<CompositionDisplaySettingAutocomplete>;
  displayTemplateKey?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  key?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  nodeType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  type?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ICompositionNodeAutocompletedisplayNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ICompositionNodeAutocompletedisplayTemplateKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ICompositionNodeAutocompletekeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ICompositionNodeAutocompletenodeTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ICompositionNodeAutocompletetypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ICompositionNodeFacet = {
  __typename?: 'ICompositionNodeFacet';
  displayName?: Maybe<Array<Maybe<StringFacet>>>;
  displaySettings?: Maybe<CompositionDisplaySettingFacet>;
  displayTemplateKey?: Maybe<Array<Maybe<StringFacet>>>;
  key?: Maybe<Array<Maybe<StringFacet>>>;
  nodeType?: Maybe<Array<Maybe<StringFacet>>>;
  type?: Maybe<Array<Maybe<StringFacet>>>;
};


export type ICompositionNodeFacetdisplayNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ICompositionNodeFacetdisplayTemplateKeyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ICompositionNodeFacetkeyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ICompositionNodeFacetnodeTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ICompositionNodeFacettypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ICompositionNodeOrderByInput = {
  displayName?: InputMaybe<OrderBy>;
  displaySettings?: InputMaybe<CompositionDisplaySettingOrderByInput>;
  displayTemplateKey?: InputMaybe<OrderBy>;
  key?: InputMaybe<OrderBy>;
  nodeType?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
};

export type ICompositionNodeWhereInput = {
  displayName?: InputMaybe<StringFilterInput>;
  displaySettings?: InputMaybe<CompositionDisplaySettingWhereInput>;
  displayTemplateKey?: InputMaybe<StringFilterInput>;
  key?: InputMaybe<StringFilterInput>;
  nodeType?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
};

export type ICompositionStructureNode = {
  displayName?: Maybe<Scalars['String']['output']>;
  displaySettings?: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  nodes?: Maybe<Array<Maybe<ICompositionNode>>>;
  type?: Maybe<Scalars['String']['output']>;
};

export type IContentMetadata = {
  created?: Maybe<Scalars['DateTime']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  published?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrl>;
  version?: Maybe<Scalars['String']['output']>;
};


export type IContentMetadatadisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type IContentMetadataAutocomplete = {
  __typename?: 'IContentMetadataAutocomplete';
  key?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  locale?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrlAutocomplete>;
  version?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type IContentMetadataAutocompletekeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompletelocaleArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompletestatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompletetypesArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteversionArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type IContentMetadataFacet = {
  __typename?: 'IContentMetadataFacet';
  created?: Maybe<Array<Maybe<DateFacet>>>;
  displayName?: Maybe<Array<Maybe<StringFacet>>>;
  key?: Maybe<Array<Maybe<StringFacet>>>;
  lastModified?: Maybe<Array<Maybe<DateFacet>>>;
  locale?: Maybe<Array<Maybe<StringFacet>>>;
  published?: Maybe<Array<Maybe<DateFacet>>>;
  status?: Maybe<Array<Maybe<StringFacet>>>;
  types?: Maybe<Array<Maybe<StringFacet>>>;
  url?: Maybe<ContentUrlFacet>;
  version?: Maybe<Array<Maybe<StringFacet>>>;
};


export type IContentMetadataFacetcreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type IContentMetadataFacetdisplayNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetkeyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetlastModifiedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type IContentMetadataFacetlocaleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetpublishedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type IContentMetadataFacetstatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacettypesArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetversionArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type IContentMetadataOrderByInput = {
  created?: InputMaybe<OrderBy>;
  displayName?: InputMaybe<OrderBy>;
  key?: InputMaybe<OrderBy>;
  lastModified?: InputMaybe<OrderBy>;
  locale?: InputMaybe<OrderBy>;
  published?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  types?: InputMaybe<OrderBy>;
  url?: InputMaybe<ContentUrlOrderByInput>;
  version?: InputMaybe<OrderBy>;
};

export type IContentMetadataWhereInput = {
  created?: InputMaybe<DateFilterInput>;
  displayName?: InputMaybe<SearchableStringFilterInput>;
  key?: InputMaybe<StringFilterInput>;
  lastModified?: InputMaybe<DateFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  published?: InputMaybe<DateFilterInput>;
  status?: InputMaybe<StringFilterInput>;
  types?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<ContentUrlWhereInput>;
  version?: InputMaybe<StringFilterInput>;
};

export type IData = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type IData_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type IData_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type IInstanceMetadata = {
  container?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  expired?: Maybe<Scalars['DateTime']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  locales?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  owner?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published?: Maybe<Scalars['DateTime']['output']>;
  routeSegment?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrl>;
  version?: Maybe<Scalars['String']['output']>;
};


export type IInstanceMetadatadisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type IItemMetadata = {
  created?: Maybe<Scalars['DateTime']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  displayOption?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  published?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrl>;
  version?: Maybe<Scalars['String']['output']>;
};


export type IItemMetadatadisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type IMediaMetadata = {
  container?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  expired?: Maybe<Scalars['DateTime']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  locales?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  mimeType?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published?: Maybe<Scalars['DateTime']['output']>;
  routeSegment?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrl>;
  version?: Maybe<Scalars['String']['output']>;
};


export type IMediaMetadatacontentArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type IMediaMetadatadisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type Image = IData & _IContent & _IImage & _IMedia & {
  __typename?: 'Image';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type Image_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Image_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ImageAutocomplete = {
  __typename?: 'ImageAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type ImageElement = IData & _IComponent & _IContent & _IElement & {
  __typename?: 'ImageElement';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  altText?: Maybe<Scalars['String']['output']>;
  imageLink?: Maybe<ContentReference>;
};


export type ImageElement_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type ImageElement_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ImageElementAutocomplete = {
  __typename?: 'ImageElementAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  imageLink?: Maybe<ContentReferenceAutocomplete>;
};

export type ImageElementFacet = {
  __typename?: 'ImageElementFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
  imageLink?: Maybe<ContentReferenceFacet>;
};

export type ImageElementOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  imageLink?: InputMaybe<ContentReferenceOrderByInput>;
};

export type ImageElementOutput = {
  __typename?: 'ImageElementOutput';
  autocomplete?: Maybe<ImageElementAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ImageElementFacet>;
  items?: Maybe<Array<Maybe<ImageElement>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ImageElementOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ImageElementWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<ImageElementWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ImageElementWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ImageElementWhereInput>>>;
  imageLink?: InputMaybe<ContentReferenceWhereInput>;
};

export type ImageFacet = {
  __typename?: 'ImageFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type ImageMedia = IData & _IContent & _IImage & _IMedia & {
  __typename?: 'ImageMedia';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type ImageMedia_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type ImageMedia_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ImageMediaAutocomplete = {
  __typename?: 'ImageMediaAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type ImageMediaFacet = {
  __typename?: 'ImageMediaFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type ImageMediaOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type ImageMediaOutput = {
  __typename?: 'ImageMediaOutput';
  autocomplete?: Maybe<ImageMediaAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ImageMediaFacet>;
  items?: Maybe<Array<Maybe<ImageMedia>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ImageMediaOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ImageMediaWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<ImageMediaWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ImageMediaWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ImageMediaWhereInput>>>;
};

export type ImageOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type ImageOutput = {
  __typename?: 'ImageOutput';
  autocomplete?: Maybe<ImageAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ImageFacet>;
  items?: Maybe<Array<Maybe<Image>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ImageOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ImageWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<ImageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ImageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ImageWhereInput>>>;
};

export type InstanceMetadata = IContentMetadata & IInstanceMetadata & {
  __typename?: 'InstanceMetadata';
  container?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  expired?: Maybe<Scalars['DateTime']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  locales?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  owner?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published?: Maybe<Scalars['DateTime']['output']>;
  routeSegment?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrl>;
  version?: Maybe<Scalars['String']['output']>;
};


export type InstanceMetadatadisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type ItemMetadata = IContentMetadata & IItemMetadata & {
  __typename?: 'ItemMetadata';
  created?: Maybe<Scalars['DateTime']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  displayOption?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  published?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrl>;
  version?: Maybe<Scalars['String']['output']>;
};


export type ItemMetadatadisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type Link = {
  __typename?: 'Link';
  target?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<ContentUrl>;
};


export type LinktextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type LinkAutocomplete = {
  __typename?: 'LinkAutocomplete';
  target?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  title?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrlAutocomplete>;
};


export type LinkAutocompletetargetArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LinkAutocompletetitleArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type LinkConfig = {
  from?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
};

export type LinkFacet = {
  __typename?: 'LinkFacet';
  target?: Maybe<Array<Maybe<StringFacet>>>;
  text?: Maybe<Array<Maybe<StringFacet>>>;
  title?: Maybe<Array<Maybe<StringFacet>>>;
  url?: Maybe<ContentUrlFacet>;
};


export type LinkFacettargetArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LinkFacettextArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LinkFacettitleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type LinkOrderByInput = {
  target?: InputMaybe<OrderBy>;
  text?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  url?: InputMaybe<ContentUrlOrderByInput>;
};

export enum LinkTypes {
  ASSETS = 'ASSETS',
  DEFAULT = 'DEFAULT',
  ITEMS = 'ITEMS',
  PATH = 'PATH'
}

export type LinkWhereInput = {
  target?: InputMaybe<StringFilterInput>;
  text?: InputMaybe<SearchableStringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<ContentUrlWhereInput>;
};

export enum Locales {
  ALL = 'ALL',
  NEUTRAL = 'NEUTRAL',
  en = 'en'
}

export type MediaMetadata = IContentMetadata & IInstanceMetadata & IMediaMetadata & {
  __typename?: 'MediaMetadata';
  container?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  expired?: Maybe<Scalars['DateTime']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  locales?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  mimeType?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published?: Maybe<Scalars['DateTime']['output']>;
  routeSegment?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrl>;
  version?: Maybe<Scalars['String']['output']>;
};


export type MediaMetadatacontentArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type MediaMetadatadisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type MegaMenuGroupBlock = IData & _IComponent & _IContent & {
  __typename?: 'MegaMenuGroupBlock';
  MegaMenuContentArea?: Maybe<Array<Maybe<_IContent>>>;
  MegaMenuUrl?: Maybe<ContentUrl>;
  MenuMenuHeading?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type MegaMenuGroupBlock_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type MegaMenuGroupBlock_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type MegaMenuGroupBlockAutocomplete = {
  __typename?: 'MegaMenuGroupBlockAutocomplete';
  MegaMenuContentArea?: Maybe<_IContentAutocomplete>;
  MegaMenuUrl?: Maybe<ContentUrlAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type MegaMenuGroupBlockFacet = {
  __typename?: 'MegaMenuGroupBlockFacet';
  MegaMenuContentArea?: Maybe<_IContentFacet>;
  MegaMenuUrl?: Maybe<ContentUrlFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type MegaMenuGroupBlockOrderByInput = {
  MegaMenuContentArea?: InputMaybe<_IContentOrderByInput>;
  MegaMenuUrl?: InputMaybe<ContentUrlOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type MegaMenuGroupBlockOutput = {
  __typename?: 'MegaMenuGroupBlockOutput';
  autocomplete?: Maybe<MegaMenuGroupBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<MegaMenuGroupBlockFacet>;
  items?: Maybe<Array<Maybe<MegaMenuGroupBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type MegaMenuGroupBlockOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MegaMenuGroupBlockWhereInput = {
  MegaMenuContentArea?: InputMaybe<_IContentWhereInput>;
  MegaMenuUrl?: InputMaybe<ContentUrlWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<MegaMenuGroupBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<MegaMenuGroupBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<MegaMenuGroupBlockWhereInput>>>;
};

export type NavigationMenuBlock = IData & _IComponent & _IContent & {
  __typename?: 'NavigationMenuBlock';
  MenuNavigationHeading?: Maybe<Scalars['String']['output']>;
  NavigationLinks?: Maybe<Array<Maybe<Link>>>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type NavigationMenuBlock_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type NavigationMenuBlock_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type NavigationMenuBlockAutocomplete = {
  __typename?: 'NavigationMenuBlockAutocomplete';
  NavigationLinks?: Maybe<LinkAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type NavigationMenuBlockFacet = {
  __typename?: 'NavigationMenuBlockFacet';
  NavigationLinks?: Maybe<LinkFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type NavigationMenuBlockOrderByInput = {
  NavigationLinks?: InputMaybe<LinkOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type NavigationMenuBlockOutput = {
  __typename?: 'NavigationMenuBlockOutput';
  autocomplete?: Maybe<NavigationMenuBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<NavigationMenuBlockFacet>;
  items?: Maybe<Array<Maybe<NavigationMenuBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type NavigationMenuBlockOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type NavigationMenuBlockProperty = {
  __typename?: 'NavigationMenuBlockProperty';
  MenuNavigationHeading?: Maybe<Scalars['String']['output']>;
  NavigationLinks?: Maybe<Array<Maybe<Link>>>;
};

export type NavigationMenuBlockPropertyAutocomplete = {
  __typename?: 'NavigationMenuBlockPropertyAutocomplete';
  NavigationLinks?: Maybe<LinkAutocomplete>;
};

export type NavigationMenuBlockPropertyFacet = {
  __typename?: 'NavigationMenuBlockPropertyFacet';
  NavigationLinks?: Maybe<LinkFacet>;
};

export type NavigationMenuBlockPropertyOrderByInput = {
  NavigationLinks?: InputMaybe<LinkOrderByInput>;
};

export type NavigationMenuBlockPropertyWhereInput = {
  NavigationLinks?: InputMaybe<LinkWhereInput>;
};

export type NavigationMenuBlockWhereInput = {
  NavigationLinks?: InputMaybe<LinkWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<NavigationMenuBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<NavigationMenuBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<NavigationMenuBlockWhereInput>>>;
};

export type NewDemopage = IData & _IContent & _IPage & {
  __typename?: 'NewDemopage';
  Title?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type NewDemopage_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type NewDemopage_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type NewDemopageAutocomplete = {
  __typename?: 'NewDemopageAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type NewDemopageFacet = {
  __typename?: 'NewDemopageFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type NewDemopageOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type NewDemopageOutput = {
  __typename?: 'NewDemopageOutput';
  autocomplete?: Maybe<NewDemopageAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<NewDemopageFacet>;
  items?: Maybe<Array<Maybe<NewDemopage>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type NewDemopageOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type NewDemopageWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<NewDemopageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<NewDemopageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<NewDemopageWhereInput>>>;
};

export type OfficeLocation = IData & _IComponent & _IContent & {
  __typename?: 'OfficeLocation';
  OfficeAddressCity?: Maybe<Scalars['String']['output']>;
  OfficeAddressCountry?: Maybe<Scalars['String']['output']>;
  OfficeAddressPostalCode?: Maybe<Scalars['String']['output']>;
  OfficeAddressStreet1?: Maybe<Scalars['String']['output']>;
  OfficeAddressStreet2?: Maybe<Scalars['String']['output']>;
  OfficeEmail?: Maybe<Scalars['String']['output']>;
  OfficePhone?: Maybe<Scalars['String']['output']>;
  OfficeTitle?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type OfficeLocation_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type OfficeLocation_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type OfficeLocationAutocomplete = {
  __typename?: 'OfficeLocationAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type OfficeLocationFacet = {
  __typename?: 'OfficeLocationFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type OfficeLocationOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type OfficeLocationOutput = {
  __typename?: 'OfficeLocationOutput';
  autocomplete?: Maybe<OfficeLocationAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<OfficeLocationFacet>;
  items?: Maybe<Array<Maybe<OfficeLocation>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type OfficeLocationOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OfficeLocationProperty = {
  __typename?: 'OfficeLocationProperty';
  OfficeAddressCity?: Maybe<Scalars['String']['output']>;
  OfficeAddressCountry?: Maybe<Scalars['String']['output']>;
  OfficeAddressPostalCode?: Maybe<Scalars['String']['output']>;
  OfficeAddressStreet1?: Maybe<Scalars['String']['output']>;
  OfficeAddressStreet2?: Maybe<Scalars['String']['output']>;
  OfficeEmail?: Maybe<Scalars['String']['output']>;
  OfficePhone?: Maybe<Scalars['String']['output']>;
  OfficeTitle?: Maybe<Scalars['String']['output']>;
};

export type OfficeLocationWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<OfficeLocationWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<OfficeLocationWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<OfficeLocationWhereInput>>>;
};

export enum OrderBy {
  ASC = 'ASC',
  DESC = 'DESC'
}

export enum OrderByFacetType {
  COUNT = 'COUNT',
  VALUE = 'VALUE'
}

export type PageSeoSettings = IData & _IComponent & _IContent & {
  __typename?: 'PageSeoSettings';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  metaTitle?: Maybe<Scalars['String']['output']>;
};


export type PageSeoSettings_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type PageSeoSettings_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type PageSeoSettingsAutocomplete = {
  __typename?: 'PageSeoSettingsAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type PageSeoSettingsFacet = {
  __typename?: 'PageSeoSettingsFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type PageSeoSettingsOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type PageSeoSettingsOutput = {
  __typename?: 'PageSeoSettingsOutput';
  autocomplete?: Maybe<PageSeoSettingsAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<PageSeoSettingsFacet>;
  items?: Maybe<Array<Maybe<PageSeoSettings>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type PageSeoSettingsOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PageSeoSettingsProperty = {
  __typename?: 'PageSeoSettingsProperty';
  metaTitle?: Maybe<Scalars['String']['output']>;
};

export type PageSeoSettingsWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<PageSeoSettingsWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<PageSeoSettingsWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<PageSeoSettingsWhereInput>>>;
};

export type PagecreatedforSaaSEvaluation = IData & _IContent & _IPage & {
  __typename?: 'PagecreatedforSaaSEvaluation';
  Date?: Maybe<Scalars['DateTime']['output']>;
  Title?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type PagecreatedforSaaSEvaluation_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type PagecreatedforSaaSEvaluation_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type PagecreatedforSaaSEvaluationAutocomplete = {
  __typename?: 'PagecreatedforSaaSEvaluationAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type PagecreatedforSaaSEvaluationFacet = {
  __typename?: 'PagecreatedforSaaSEvaluationFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type PagecreatedforSaaSEvaluationOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type PagecreatedforSaaSEvaluationOutput = {
  __typename?: 'PagecreatedforSaaSEvaluationOutput';
  autocomplete?: Maybe<PagecreatedforSaaSEvaluationAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<PagecreatedforSaaSEvaluationFacet>;
  items?: Maybe<Array<Maybe<PagecreatedforSaaSEvaluation>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type PagecreatedforSaaSEvaluationOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PagecreatedforSaaSEvaluationWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<PagecreatedforSaaSEvaluationWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<PagecreatedforSaaSEvaluationWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<PagecreatedforSaaSEvaluationWhereInput>>>;
};

export type ParagraphElement = IData & _IComponent & _IContent & _IElement & {
  __typename?: 'ParagraphElement';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  text?: Maybe<RichText>;
};


export type ParagraphElement_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type ParagraphElement_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ParagraphElementAutocomplete = {
  __typename?: 'ParagraphElementAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  text?: Maybe<RichTextAutocomplete>;
};

export type ParagraphElementFacet = {
  __typename?: 'ParagraphElementFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
  text?: Maybe<RichTextFacet>;
};

export type ParagraphElementOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  text?: InputMaybe<RichTextOrderByInput>;
};

export type ParagraphElementOutput = {
  __typename?: 'ParagraphElementOutput';
  autocomplete?: Maybe<ParagraphElementAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ParagraphElementFacet>;
  items?: Maybe<Array<Maybe<ParagraphElement>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ParagraphElementOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ParagraphElementWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<ParagraphElementWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ParagraphElementWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ParagraphElementWhereInput>>>;
  text?: InputMaybe<RichTextWhereInput>;
};

export type Query = {
  __typename?: 'Query';
  AIFreePrompt?: Maybe<AIFreePromptOutput>;
  AIPersonalizedPrompt?: Maybe<AIPersonalizedPromptOutput>;
  AnotherSearch?: Maybe<AnotherSearchOutput>;
  ArticleGroupPage?: Maybe<ArticleGroupPageOutput>;
  ArticleListElement?: Maybe<ArticleListElementOutput>;
  ArticlePage?: Maybe<ArticlePageOutput>;
  BannerBlock?: Maybe<BannerBlockOutput>;
  BlankExperience?: Maybe<BlankExperienceOutput>;
  BlankSection?: Maybe<BlankSectionOutput>;
  BlockTest?: Maybe<BlockTestOutput>;
  ButtonBlock?: Maybe<ButtonBlockOutput>;
  CTAElement?: Maybe<CTAElementOutput>;
  CardBlock?: Maybe<CardBlockOutput>;
  Data?: Maybe<DataOutput>;
  DefaultImage?: Maybe<DefaultImageOutput>;
  DefaultVideo?: Maybe<DefaultVideoOutput>;
  Dictionary?: Maybe<DictionaryOutput>;
  DictionaryItem?: Maybe<DictionaryItemOutput>;
  FoodSuggestionItem?: Maybe<FoodSuggestionItemOutput>;
  FoodSuggestionItemBlock?: Maybe<FoodSuggestionItemBlockOutput>;
  GenericMedia?: Maybe<GenericMediaOutput>;
  HeaderBlock?: Maybe<HeaderBlockOutput>;
  HeadingElement?: Maybe<HeadingElementOutput>;
  Image?: Maybe<ImageOutput>;
  ImageElement?: Maybe<ImageElementOutput>;
  ImageMedia?: Maybe<ImageMediaOutput>;
  MegaMenuGroupBlock?: Maybe<MegaMenuGroupBlockOutput>;
  NavigationMenuBlock?: Maybe<NavigationMenuBlockOutput>;
  NewDemopage?: Maybe<NewDemopageOutput>;
  OfficeLocation?: Maybe<OfficeLocationOutput>;
  PageSeoSettings?: Maybe<PageSeoSettingsOutput>;
  PagecreatedforSaaSEvaluation?: Maybe<PagecreatedforSaaSEvaluationOutput>;
  ParagraphElement?: Maybe<ParagraphElementOutput>;
  SearchPage?: Maybe<SearchPageOutput>;
  SysContentFolder?: Maybe<SysContentFolderOutput>;
  TestContent?: Maybe<TestContentOutput>;
  TestimonialElement?: Maybe<TestimonialElementOutput>;
  Video?: Maybe<VideoOutput>;
  VideoMedia?: Maybe<VideoMediaOutput>;
  WebsiteFooter?: Maybe<WebsiteFooterOutput>;
  _Component?: Maybe<_ComponentOutput>;
  _Content?: Maybe<_ContentOutput>;
  _Element?: Maybe<_ElementOutput>;
  _Experience?: Maybe<_ExperienceOutput>;
  _Folder?: Maybe<_FolderOutput>;
  _Image?: Maybe<_ImageOutput>;
  _Media?: Maybe<_MediaOutput>;
  _Page?: Maybe<_PageOutput>;
  _Section?: Maybe<_SectionOutput>;
  _Video?: Maybe<_VideoOutput>;
  hero?: Maybe<heroOutput>;
  hero2?: Maybe<hero2Output>;
  hero3?: Maybe<hero3Output>;
  hero4?: Maybe<hero4Output>;
  heroBanner?: Maybe<heroBannerOutput>;
  heroBanner2?: Maybe<heroBanner2Output>;
  heroBanner3?: Maybe<heroBanner3Output>;
  heroBanner4?: Maybe<heroBanner4Output>;
  heroBanner5?: Maybe<heroBanner5Output>;
  heroBanner6?: Maybe<heroBanner6Output>;
  necComponent?: Maybe<necComponentOutput>;
  newEelem?: Maybe<newEelemOutput>;
};


export type QueryAIFreePromptArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<AIFreePromptOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<AIFreePromptWhereInput>;
};


export type QueryAIPersonalizedPromptArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<AIPersonalizedPromptOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<AIPersonalizedPromptWhereInput>;
};


export type QueryAnotherSearchArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<AnotherSearchOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<AnotherSearchWhereInput>;
};


export type QueryArticleGroupPageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ArticleGroupPageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ArticleGroupPageWhereInput>;
};


export type QueryArticleListElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ArticleListElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ArticleListElementWhereInput>;
};


export type QueryArticlePageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ArticlePageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ArticlePageWhereInput>;
};


export type QueryBannerBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<BannerBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<BannerBlockWhereInput>;
};


export type QueryBlankExperienceArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<BlankExperienceOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<BlankExperienceWhereInput>;
};


export type QueryBlankSectionArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<BlankSectionOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<BlankSectionWhereInput>;
};


export type QueryBlockTestArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<BlockTestOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<BlockTestWhereInput>;
};


export type QueryButtonBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ButtonBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ButtonBlockWhereInput>;
};


export type QueryCTAElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<CTAElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<CTAElementWhereInput>;
};


export type QueryCardBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<CardBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<CardBlockWhereInput>;
};


export type QueryDataArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<system_Locales>>>;
  orderBy?: InputMaybe<DataOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<DataWhereInput>;
};


export type QueryDefaultImageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<DefaultImageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<DefaultImageWhereInput>;
};


export type QueryDefaultVideoArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<DefaultVideoOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<DefaultVideoWhereInput>;
};


export type QueryDictionaryArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<DictionaryOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<DictionaryWhereInput>;
};


export type QueryDictionaryItemArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<DictionaryItemOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<DictionaryItemWhereInput>;
};


export type QueryFoodSuggestionItemArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<FoodSuggestionItemOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<FoodSuggestionItemWhereInput>;
};


export type QueryFoodSuggestionItemBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<FoodSuggestionItemBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<FoodSuggestionItemBlockWhereInput>;
};


export type QueryGenericMediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<GenericMediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<GenericMediaWhereInput>;
};


export type QueryHeaderBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<HeaderBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<HeaderBlockWhereInput>;
};


export type QueryHeadingElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<HeadingElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<HeadingElementWhereInput>;
};


export type QueryImageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ImageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ImageWhereInput>;
};


export type QueryImageElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ImageElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ImageElementWhereInput>;
};


export type QueryImageMediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ImageMediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ImageMediaWhereInput>;
};


export type QueryMegaMenuGroupBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<MegaMenuGroupBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<MegaMenuGroupBlockWhereInput>;
};


export type QueryNavigationMenuBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<NavigationMenuBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<NavigationMenuBlockWhereInput>;
};


export type QueryNewDemopageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<NewDemopageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<NewDemopageWhereInput>;
};


export type QueryOfficeLocationArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<OfficeLocationOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<OfficeLocationWhereInput>;
};


export type QueryPageSeoSettingsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<PageSeoSettingsOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<PageSeoSettingsWhereInput>;
};


export type QueryPagecreatedforSaaSEvaluationArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<PagecreatedforSaaSEvaluationOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<PagecreatedforSaaSEvaluationWhereInput>;
};


export type QueryParagraphElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ParagraphElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ParagraphElementWhereInput>;
};


export type QuerySearchPageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<SearchPageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<SearchPageWhereInput>;
};


export type QuerySysContentFolderArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<SysContentFolderOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<SysContentFolderWhereInput>;
};


export type QueryTestContentArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<TestContentOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<TestContentWhereInput>;
};


export type QueryTestimonialElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<TestimonialElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<TestimonialElementWhereInput>;
};


export type QueryVideoArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<VideoOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<VideoWhereInput>;
};


export type QueryVideoMediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<VideoMediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<VideoMediaWhereInput>;
};


export type QueryWebsiteFooterArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<WebsiteFooterOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<WebsiteFooterWhereInput>;
};


export type Query_ComponentArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ComponentOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<_ComponentWhereInput>;
};


export type Query_ContentArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ContentOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<_ContentWhereInput>;
};


export type Query_ElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<_ElementWhereInput>;
};


export type Query_ExperienceArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ExperienceOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<_ExperienceWhereInput>;
};


export type Query_FolderArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_FolderOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<_FolderWhereInput>;
};


export type Query_ImageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ImageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<_ImageWhereInput>;
};


export type Query_MediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_MediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<_MediaWhereInput>;
};


export type Query_PageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_PageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<_PageWhereInput>;
};


export type Query_SectionArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_SectionOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<_SectionWhereInput>;
};


export type Query_VideoArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_VideoOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<_VideoWhereInput>;
};


export type QueryheroArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<heroOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<heroWhereInput>;
};


export type Queryhero2Args = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<hero2OrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<hero2WhereInput>;
};


export type Queryhero3Args = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<hero3OrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<hero3WhereInput>;
};


export type Queryhero4Args = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<hero4OrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<hero4WhereInput>;
};


export type QueryheroBannerArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<heroBannerOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<heroBannerWhereInput>;
};


export type QueryheroBanner2Args = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<heroBanner2OrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<heroBanner2WhereInput>;
};


export type QueryheroBanner3Args = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<heroBanner3OrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<heroBanner3WhereInput>;
};


export type QueryheroBanner4Args = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<heroBanner4OrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<heroBanner4WhereInput>;
};


export type QueryheroBanner5Args = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<heroBanner5OrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<heroBanner5WhereInput>;
};


export type QueryheroBanner6Args = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<heroBanner6OrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<heroBanner6WhereInput>;
};


export type QuerynecComponentArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<necComponentOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<necComponentWhereInput>;
};


export type QuerynewEelemArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<newEelemOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<newEelemWhereInput>;
};

export type QueryRef = {
  __typename?: 'QueryRef';
  AIFreePrompt?: Maybe<AIFreePromptOutput>;
  AIPersonalizedPrompt?: Maybe<AIPersonalizedPromptOutput>;
  AnotherSearch?: Maybe<AnotherSearchOutput>;
  ArticleGroupPage?: Maybe<ArticleGroupPageOutput>;
  ArticleListElement?: Maybe<ArticleListElementOutput>;
  ArticlePage?: Maybe<ArticlePageOutput>;
  BannerBlock?: Maybe<BannerBlockOutput>;
  BlankExperience?: Maybe<BlankExperienceOutput>;
  BlankSection?: Maybe<BlankSectionOutput>;
  BlockTest?: Maybe<BlockTestOutput>;
  ButtonBlock?: Maybe<ButtonBlockOutput>;
  CTAElement?: Maybe<CTAElementOutput>;
  CardBlock?: Maybe<CardBlockOutput>;
  Data?: Maybe<DataOutput>;
  DefaultImage?: Maybe<DefaultImageOutput>;
  DefaultVideo?: Maybe<DefaultVideoOutput>;
  Dictionary?: Maybe<DictionaryOutput>;
  DictionaryItem?: Maybe<DictionaryItemOutput>;
  FoodSuggestionItem?: Maybe<FoodSuggestionItemOutput>;
  FoodSuggestionItemBlock?: Maybe<FoodSuggestionItemBlockOutput>;
  GenericMedia?: Maybe<GenericMediaOutput>;
  HeaderBlock?: Maybe<HeaderBlockOutput>;
  HeadingElement?: Maybe<HeadingElementOutput>;
  Image?: Maybe<ImageOutput>;
  ImageElement?: Maybe<ImageElementOutput>;
  ImageMedia?: Maybe<ImageMediaOutput>;
  MegaMenuGroupBlock?: Maybe<MegaMenuGroupBlockOutput>;
  NavigationMenuBlock?: Maybe<NavigationMenuBlockOutput>;
  NewDemopage?: Maybe<NewDemopageOutput>;
  OfficeLocation?: Maybe<OfficeLocationOutput>;
  PageSeoSettings?: Maybe<PageSeoSettingsOutput>;
  PagecreatedforSaaSEvaluation?: Maybe<PagecreatedforSaaSEvaluationOutput>;
  ParagraphElement?: Maybe<ParagraphElementOutput>;
  SearchPage?: Maybe<SearchPageOutput>;
  SysContentFolder?: Maybe<SysContentFolderOutput>;
  TestContent?: Maybe<TestContentOutput>;
  TestimonialElement?: Maybe<TestimonialElementOutput>;
  Video?: Maybe<VideoOutput>;
  VideoMedia?: Maybe<VideoMediaOutput>;
  WebsiteFooter?: Maybe<WebsiteFooterOutput>;
  _Component?: Maybe<_ComponentOutput>;
  _Content?: Maybe<_ContentOutput>;
  _Element?: Maybe<_ElementOutput>;
  _Experience?: Maybe<_ExperienceOutput>;
  _Folder?: Maybe<_FolderOutput>;
  _Image?: Maybe<_ImageOutput>;
  _Media?: Maybe<_MediaOutput>;
  _Page?: Maybe<_PageOutput>;
  _Section?: Maybe<_SectionOutput>;
  _Video?: Maybe<_VideoOutput>;
  hero?: Maybe<heroOutput>;
  hero2?: Maybe<hero2Output>;
  hero3?: Maybe<hero3Output>;
  hero4?: Maybe<hero4Output>;
  heroBanner?: Maybe<heroBannerOutput>;
  heroBanner2?: Maybe<heroBanner2Output>;
  heroBanner3?: Maybe<heroBanner3Output>;
  heroBanner4?: Maybe<heroBanner4Output>;
  heroBanner5?: Maybe<heroBanner5Output>;
  heroBanner6?: Maybe<heroBanner6Output>;
  necComponent?: Maybe<necComponentOutput>;
  newEelem?: Maybe<newEelemOutput>;
};


export type QueryRefAIFreePromptArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<AIFreePromptOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<AIFreePromptWhereInput>;
};


export type QueryRefAIPersonalizedPromptArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<AIPersonalizedPromptOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<AIPersonalizedPromptWhereInput>;
};


export type QueryRefAnotherSearchArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<AnotherSearchOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<AnotherSearchWhereInput>;
};


export type QueryRefArticleGroupPageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ArticleGroupPageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ArticleGroupPageWhereInput>;
};


export type QueryRefArticleListElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ArticleListElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ArticleListElementWhereInput>;
};


export type QueryRefArticlePageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ArticlePageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ArticlePageWhereInput>;
};


export type QueryRefBannerBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<BannerBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<BannerBlockWhereInput>;
};


export type QueryRefBlankExperienceArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<BlankExperienceOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<BlankExperienceWhereInput>;
};


export type QueryRefBlankSectionArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<BlankSectionOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<BlankSectionWhereInput>;
};


export type QueryRefBlockTestArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<BlockTestOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<BlockTestWhereInput>;
};


export type QueryRefButtonBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ButtonBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ButtonBlockWhereInput>;
};


export type QueryRefCTAElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<CTAElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<CTAElementWhereInput>;
};


export type QueryRefCardBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<CardBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<CardBlockWhereInput>;
};


export type QueryRefDataArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<system_Locales>>>;
  orderBy?: InputMaybe<DataOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<DataWhereInput>;
};


export type QueryRefDefaultImageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<DefaultImageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<DefaultImageWhereInput>;
};


export type QueryRefDefaultVideoArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<DefaultVideoOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<DefaultVideoWhereInput>;
};


export type QueryRefDictionaryArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<DictionaryOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<DictionaryWhereInput>;
};


export type QueryRefDictionaryItemArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<DictionaryItemOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<DictionaryItemWhereInput>;
};


export type QueryRefFoodSuggestionItemArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<FoodSuggestionItemOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<FoodSuggestionItemWhereInput>;
};


export type QueryRefFoodSuggestionItemBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<FoodSuggestionItemBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<FoodSuggestionItemBlockWhereInput>;
};


export type QueryRefGenericMediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<GenericMediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<GenericMediaWhereInput>;
};


export type QueryRefHeaderBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<HeaderBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<HeaderBlockWhereInput>;
};


export type QueryRefHeadingElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<HeadingElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<HeadingElementWhereInput>;
};


export type QueryRefImageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ImageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ImageWhereInput>;
};


export type QueryRefImageElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ImageElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ImageElementWhereInput>;
};


export type QueryRefImageMediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ImageMediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ImageMediaWhereInput>;
};


export type QueryRefMegaMenuGroupBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<MegaMenuGroupBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<MegaMenuGroupBlockWhereInput>;
};


export type QueryRefNavigationMenuBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<NavigationMenuBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<NavigationMenuBlockWhereInput>;
};


export type QueryRefNewDemopageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<NewDemopageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<NewDemopageWhereInput>;
};


export type QueryRefOfficeLocationArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<OfficeLocationOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<OfficeLocationWhereInput>;
};


export type QueryRefPageSeoSettingsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<PageSeoSettingsOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<PageSeoSettingsWhereInput>;
};


export type QueryRefPagecreatedforSaaSEvaluationArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<PagecreatedforSaaSEvaluationOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<PagecreatedforSaaSEvaluationWhereInput>;
};


export type QueryRefParagraphElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ParagraphElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ParagraphElementWhereInput>;
};


export type QueryRefSearchPageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<SearchPageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<SearchPageWhereInput>;
};


export type QueryRefSysContentFolderArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<SysContentFolderOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<SysContentFolderWhereInput>;
};


export type QueryRefTestContentArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<TestContentOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<TestContentWhereInput>;
};


export type QueryRefTestimonialElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<TestimonialElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<TestimonialElementWhereInput>;
};


export type QueryRefVideoArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<VideoOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<VideoWhereInput>;
};


export type QueryRefVideoMediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<VideoMediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<VideoMediaWhereInput>;
};


export type QueryRefWebsiteFooterArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<WebsiteFooterOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<WebsiteFooterWhereInput>;
};


export type QueryRef_ComponentArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ComponentOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<_ComponentWhereInput>;
};


export type QueryRef_ContentArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ContentOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<_ContentWhereInput>;
};


export type QueryRef_ElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<_ElementWhereInput>;
};


export type QueryRef_ExperienceArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ExperienceOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<_ExperienceWhereInput>;
};


export type QueryRef_FolderArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_FolderOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<_FolderWhereInput>;
};


export type QueryRef_ImageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ImageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<_ImageWhereInput>;
};


export type QueryRef_MediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_MediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<_MediaWhereInput>;
};


export type QueryRef_PageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_PageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<_PageWhereInput>;
};


export type QueryRef_SectionArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_SectionOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<_SectionWhereInput>;
};


export type QueryRef_VideoArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_VideoOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<_VideoWhereInput>;
};


export type QueryRefheroArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<heroOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<heroWhereInput>;
};


export type QueryRefhero2Args = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<hero2OrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<hero2WhereInput>;
};


export type QueryRefhero3Args = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<hero3OrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<hero3WhereInput>;
};


export type QueryRefhero4Args = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<hero4OrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<hero4WhereInput>;
};


export type QueryRefheroBannerArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<heroBannerOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<heroBannerWhereInput>;
};


export type QueryRefheroBanner2Args = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<heroBanner2OrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<heroBanner2WhereInput>;
};


export type QueryRefheroBanner3Args = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<heroBanner3OrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<heroBanner3WhereInput>;
};


export type QueryRefheroBanner4Args = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<heroBanner4OrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<heroBanner4WhereInput>;
};


export type QueryRefheroBanner5Args = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<heroBanner5OrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<heroBanner5WhereInput>;
};


export type QueryRefheroBanner6Args = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<heroBanner6OrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<heroBanner6WhereInput>;
};


export type QueryRefnecComponentArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<necComponentOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<necComponentWhereInput>;
};


export type QueryRefnewEelemArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<newEelemOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<newEelemWhereInput>;
};

export enum Ranking {
  BOOST_ONLY = 'BOOST_ONLY',
  DOC = 'DOC',
  RELEVANCE = 'RELEVANCE',
  SEMANTIC = 'SEMANTIC'
}

export type RichText = {
  __typename?: 'RichText';
  html?: Maybe<Scalars['String']['output']>;
  json?: Maybe<Scalars['JSON']['output']>;
};

export type RichTextAutocomplete = {
  __typename?: 'RichTextAutocomplete';
  html?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type RichTextAutocompletehtmlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type RichTextFacet = {
  __typename?: 'RichTextFacet';
  html?: Maybe<Array<Maybe<StringFacet>>>;
};


export type RichTextFacethtmlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type RichTextOrderByInput = {
  html?: InputMaybe<OrderBy>;
};

export type RichTextWhereInput = {
  html?: InputMaybe<StringFilterInput>;
};

export type SearchPage = IData & _IContent & _IPage & {
  __typename?: 'SearchPage';
  BlockTest?: Maybe<OfficeLocationProperty>;
  ContentArea?: Maybe<Array<Maybe<_IContent>>>;
  PageTitle?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type SearchPage_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type SearchPage_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type SearchPageAutocomplete = {
  __typename?: 'SearchPageAutocomplete';
  BlockTest?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ContentArea?: Maybe<_IContentAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};


export type SearchPageAutocompleteBlockTestArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type SearchPageFacet = {
  __typename?: 'SearchPageFacet';
  BlockTest?: Maybe<Array<Maybe<StringFacet>>>;
  ContentArea?: Maybe<_IContentFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};


export type SearchPageFacetBlockTestArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type SearchPageOrderByInput = {
  BlockTest?: InputMaybe<OrderBy>;
  ContentArea?: InputMaybe<_IContentOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type SearchPageOutput = {
  __typename?: 'SearchPageOutput';
  autocomplete?: Maybe<SearchPageAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<SearchPageFacet>;
  items?: Maybe<Array<Maybe<SearchPage>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type SearchPageOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SearchPageWhereInput = {
  BlockTest?: InputMaybe<StringFilterInput>;
  ContentArea?: InputMaybe<_IContentWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<SearchPageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<SearchPageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<SearchPageWhereInput>>>;
};

export type SearchableStringFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost?: InputMaybe<Scalars['Int']['input']>;
  /** `contains` performs full-text search on a word or phrase. */
  contains?: InputMaybe<Scalars['String']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** `exist` matches results that have this field. */
  exist?: InputMaybe<Scalars['Boolean']['input']>;
  /** enables supporting fuzzy matching on the query terms (keywords), which returns items that contain terms in the content similar to the keywords, as measured by a _Levenshtein edit distance_. An edit distance is the number of one-character changes needed to turn one term into another. The edit distance is based on the length of the term.  */
  fuzzy?: InputMaybe<Scalars['Boolean']['input']>;
  /** `in` matches with 1 or more exact values in a list. Example: `in: ["word1", "word2", "this is a phrase"]` */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `like` matches on substrings with wildcard support: `%` to match on 0 or more characters, `_` to match on any character.  */
  like?: InputMaybe<Scalars['String']['input']>;
  /** `match` performs full-text search on a word or phrase where less relevant items are also returned. The `match` operator is only supported for `searchable` fields. It will improve fulltext search by making it easier to match on words. More exact matches will be ranked higher, less exact matches will be ranked lower. The `match` operator is supported with synonyms and fuzzy search. */
  match?: InputMaybe<Scalars['String']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq?: InputMaybe<Scalars['String']['input']>;
  /** `not_in` returns results that do not match with 1 or more exact values in a list. Example: `not_in: ["word1", "word2", "this is a phrase"]` */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `starts_with` retrieves matches that start with a certain value (prefix). */
  startsWith?: InputMaybe<Scalars['String']['input']>;
  /** expands query value with synonyms. Example: if `H2O` is a synonym of `water`, then querying for `water` will also return results with `H2O`. */
  synonyms?: InputMaybe<Array<InputMaybe<SynonymSlot>>>;
};

export type StringFacet = {
  __typename?: 'StringFacet';
  count?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type StringFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost?: InputMaybe<Scalars['Int']['input']>;
  /** `ends_with` retrieves matches that end with a certain value (suffix). */
  endsWith?: InputMaybe<Scalars['String']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** `exist` matches results that have this field. */
  exist?: InputMaybe<Scalars['Boolean']['input']>;
  /** enables supporting fuzzy matching on the query terms (keywords), which returns items that contain terms in the content similar to the keywords, as measured by a _Levenshtein edit distance_. An edit distance is the number of one-character changes needed to turn one term into another. The edit distance is based on the length of the term.  */
  fuzzy?: InputMaybe<Scalars['Boolean']['input']>;
  /** `in` matches with 1 or more exact values in a list. Example: `in: ["word1", "word2", "this is a phrase"]` */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `like` matches on substrings with wildcard support: `%` to match on 0 or more characters, `_` to match on any character.  */
  like?: InputMaybe<Scalars['String']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq?: InputMaybe<Scalars['String']['input']>;
  /** `not_in` returns results that do not match with 1 or more exact values in a list. Example: `not_in: ["word1", "word2", "this is a phrase"]` */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `starts_with` retrieves matches that start with a certain value (prefix). */
  startsWith?: InputMaybe<Scalars['String']['input']>;
  /** expands query value with synonyms. Example: if `H2O` is a synonym of `water`, then querying for `water` will also return results with `H2O`. */
  synonyms?: InputMaybe<Array<InputMaybe<SynonymSlot>>>;
};

export enum SynonymSlot {
  /** synonym slot 1 */
  ONE = 'ONE',
  /** synonym slot 2 */
  TWO = 'TWO'
}

export type SysContentFolder = IData & _IContent & _IFolder & {
  __typename?: 'SysContentFolder';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type SysContentFolder_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type SysContentFolder_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type SysContentFolderAutocomplete = {
  __typename?: 'SysContentFolderAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type SysContentFolderFacet = {
  __typename?: 'SysContentFolderFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type SysContentFolderOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type SysContentFolderOutput = {
  __typename?: 'SysContentFolderOutput';
  autocomplete?: Maybe<SysContentFolderAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<SysContentFolderFacet>;
  items?: Maybe<Array<Maybe<SysContentFolder>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type SysContentFolderOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SysContentFolderWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<SysContentFolderWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<SysContentFolderWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<SysContentFolderWhereInput>>>;
};

export type TestContent = IData & _IContent & _IPage & {
  __typename?: 'TestContent';
  Amount?: Maybe<Scalars['Int']['output']>;
  ContentArea?: Maybe<Array<Maybe<_IContent>>>;
  Title?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type TestContent_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type TestContent_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type TestContentAutocomplete = {
  __typename?: 'TestContentAutocomplete';
  ContentArea?: Maybe<_IContentAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type TestContentFacet = {
  __typename?: 'TestContentFacet';
  ContentArea?: Maybe<_IContentFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type TestContentOrderByInput = {
  ContentArea?: InputMaybe<_IContentOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type TestContentOutput = {
  __typename?: 'TestContentOutput';
  autocomplete?: Maybe<TestContentAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<TestContentFacet>;
  items?: Maybe<Array<Maybe<TestContent>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type TestContentOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TestContentWhereInput = {
  ContentArea?: InputMaybe<_IContentWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<TestContentWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<TestContentWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<TestContentWhereInput>>>;
};

export type TestimonialElement = IData & _IComponent & _IContent & _IElement & {
  __typename?: 'TestimonialElement';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  customerImage?: Maybe<ContentReference>;
  customerLocation?: Maybe<Scalars['String']['output']>;
  customerName?: Maybe<Scalars['String']['output']>;
  referenceText?: Maybe<RichText>;
  referenceTitle?: Maybe<Scalars['String']['output']>;
};


export type TestimonialElement_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type TestimonialElement_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type TestimonialElementAutocomplete = {
  __typename?: 'TestimonialElementAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  customerImage?: Maybe<ContentReferenceAutocomplete>;
  referenceText?: Maybe<RichTextAutocomplete>;
};

export type TestimonialElementFacet = {
  __typename?: 'TestimonialElementFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
  customerImage?: Maybe<ContentReferenceFacet>;
  referenceText?: Maybe<RichTextFacet>;
};

export type TestimonialElementOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  customerImage?: InputMaybe<ContentReferenceOrderByInput>;
  referenceText?: InputMaybe<RichTextOrderByInput>;
};

export type TestimonialElementOutput = {
  __typename?: 'TestimonialElementOutput';
  autocomplete?: Maybe<TestimonialElementAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<TestimonialElementFacet>;
  items?: Maybe<Array<Maybe<TestimonialElement>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type TestimonialElementOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TestimonialElementWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<TestimonialElementWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<TestimonialElementWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<TestimonialElementWhereInput>>>;
  customerImage?: InputMaybe<ContentReferenceWhereInput>;
  referenceText?: InputMaybe<RichTextWhereInput>;
};

export type Video = IData & _IContent & _IMedia & _IVideo & {
  __typename?: 'Video';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type Video_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Video_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type VideoAutocomplete = {
  __typename?: 'VideoAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type VideoFacet = {
  __typename?: 'VideoFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type VideoMedia = IData & _IContent & _IMedia & _IVideo & {
  __typename?: 'VideoMedia';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type VideoMedia_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type VideoMedia_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type VideoMediaAutocomplete = {
  __typename?: 'VideoMediaAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type VideoMediaFacet = {
  __typename?: 'VideoMediaFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type VideoMediaOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type VideoMediaOutput = {
  __typename?: 'VideoMediaOutput';
  autocomplete?: Maybe<VideoMediaAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<VideoMediaFacet>;
  items?: Maybe<Array<Maybe<VideoMedia>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type VideoMediaOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VideoMediaWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<VideoMediaWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<VideoMediaWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<VideoMediaWhereInput>>>;
};

export type VideoOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type VideoOutput = {
  __typename?: 'VideoOutput';
  autocomplete?: Maybe<VideoAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<VideoFacet>;
  items?: Maybe<Array<Maybe<Video>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type VideoOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VideoWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<VideoWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<VideoWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<VideoWhereInput>>>;
};

export type WebsiteFooter = IData & _IComponent & _IContent & {
  __typename?: 'WebsiteFooter';
  FooterFirstLinkList?: Maybe<NavigationMenuBlockProperty>;
  FooterLegalLinks?: Maybe<Array<Maybe<Link>>>;
  FooterLogo?: Maybe<ContentReference>;
  FooterLogoAltText?: Maybe<Scalars['String']['output']>;
  FooterMainOfficeLocation?: Maybe<Array<Maybe<_IContent>>>;
  FooterSecondLinkList?: Maybe<NavigationMenuBlockProperty>;
  FooterThirdLinkList?: Maybe<NavigationMenuBlockProperty>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type WebsiteFooter_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type WebsiteFooter_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type WebsiteFooterAutocomplete = {
  __typename?: 'WebsiteFooterAutocomplete';
  FooterFirstLinkList?: Maybe<NavigationMenuBlockPropertyAutocomplete>;
  FooterLegalLinks?: Maybe<LinkAutocomplete>;
  FooterLogo?: Maybe<ContentReferenceAutocomplete>;
  FooterMainOfficeLocation?: Maybe<_IContentAutocomplete>;
  FooterSecondLinkList?: Maybe<NavigationMenuBlockPropertyAutocomplete>;
  FooterThirdLinkList?: Maybe<NavigationMenuBlockPropertyAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type WebsiteFooterFacet = {
  __typename?: 'WebsiteFooterFacet';
  FooterFirstLinkList?: Maybe<NavigationMenuBlockPropertyFacet>;
  FooterLegalLinks?: Maybe<LinkFacet>;
  FooterLogo?: Maybe<ContentReferenceFacet>;
  FooterMainOfficeLocation?: Maybe<_IContentFacet>;
  FooterSecondLinkList?: Maybe<NavigationMenuBlockPropertyFacet>;
  FooterThirdLinkList?: Maybe<NavigationMenuBlockPropertyFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type WebsiteFooterOrderByInput = {
  FooterFirstLinkList?: InputMaybe<NavigationMenuBlockPropertyOrderByInput>;
  FooterLegalLinks?: InputMaybe<LinkOrderByInput>;
  FooterLogo?: InputMaybe<ContentReferenceOrderByInput>;
  FooterMainOfficeLocation?: InputMaybe<_IContentOrderByInput>;
  FooterSecondLinkList?: InputMaybe<NavigationMenuBlockPropertyOrderByInput>;
  FooterThirdLinkList?: InputMaybe<NavigationMenuBlockPropertyOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type WebsiteFooterOutput = {
  __typename?: 'WebsiteFooterOutput';
  autocomplete?: Maybe<WebsiteFooterAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<WebsiteFooterFacet>;
  items?: Maybe<Array<Maybe<WebsiteFooter>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type WebsiteFooterOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type WebsiteFooterWhereInput = {
  FooterFirstLinkList?: InputMaybe<NavigationMenuBlockPropertyWhereInput>;
  FooterLegalLinks?: InputMaybe<LinkWhereInput>;
  FooterLogo?: InputMaybe<ContentReferenceWhereInput>;
  FooterMainOfficeLocation?: InputMaybe<_IContentWhereInput>;
  FooterSecondLinkList?: InputMaybe<NavigationMenuBlockPropertyWhereInput>;
  FooterThirdLinkList?: InputMaybe<NavigationMenuBlockPropertyWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<WebsiteFooterWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<WebsiteFooterWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<WebsiteFooterWhereInput>>>;
};

export type _Component = IData & _IComponent & _IContent & {
  __typename?: '_Component';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type _Component_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Component_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _ComponentAutocomplete = {
  __typename?: '_ComponentAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type _ComponentFacet = {
  __typename?: '_ComponentFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _ComponentOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type _ComponentOutput = {
  __typename?: '_ComponentOutput';
  autocomplete?: Maybe<_ComponentAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_ComponentFacet>;
  items?: Maybe<Array<Maybe<_IComponent>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _ComponentOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ComponentWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_ComponentWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_ComponentWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_ComponentWhereInput>>>;
};

export type _Content = IData & _IContent & {
  __typename?: '_Content';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type _Content_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Content_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _ContentAutocomplete = {
  __typename?: '_ContentAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type _ContentFacet = {
  __typename?: '_ContentFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _ContentOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type _ContentOutput = {
  __typename?: '_ContentOutput';
  autocomplete?: Maybe<_ContentAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_ContentFacet>;
  items?: Maybe<Array<Maybe<_IContent>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _ContentOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ContentWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_ContentWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_ContentWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_ContentWhereInput>>>;
};

export type _Element = IData & _IComponent & _IContent & _IElement & {
  __typename?: '_Element';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type _Element_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Element_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _ElementAutocomplete = {
  __typename?: '_ElementAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type _ElementFacet = {
  __typename?: '_ElementFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _ElementOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type _ElementOutput = {
  __typename?: '_ElementOutput';
  autocomplete?: Maybe<_ElementAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_ElementFacet>;
  items?: Maybe<Array<Maybe<_IElement>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _ElementOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ElementWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_ElementWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_ElementWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_ElementWhereInput>>>;
};

export type _Experience = IData & _IContent & _IExperience & _IPage & {
  __typename?: '_Experience';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  composition?: Maybe<CompositionStructureNode>;
};


export type _Experience_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Experience_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _ExperienceAutocomplete = {
  __typename?: '_ExperienceAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  composition?: Maybe<CompositionStructureNodeAutocomplete>;
};

export type _ExperienceFacet = {
  __typename?: '_ExperienceFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
  composition?: Maybe<CompositionStructureNodeFacet>;
};

export type _ExperienceOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  composition?: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type _ExperienceOutput = {
  __typename?: '_ExperienceOutput';
  autocomplete?: Maybe<_ExperienceAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_ExperienceFacet>;
  items?: Maybe<Array<Maybe<_IExperience>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _ExperienceOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ExperienceWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_ExperienceWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_ExperienceWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_ExperienceWhereInput>>>;
  composition?: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type _Folder = IData & _IContent & _IFolder & {
  __typename?: '_Folder';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type _Folder_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Folder_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _FolderAutocomplete = {
  __typename?: '_FolderAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type _FolderFacet = {
  __typename?: '_FolderFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _FolderOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type _FolderOutput = {
  __typename?: '_FolderOutput';
  autocomplete?: Maybe<_FolderAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_FolderFacet>;
  items?: Maybe<Array<Maybe<_IFolder>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _FolderOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _FolderWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_FolderWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_FolderWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_FolderWhereInput>>>;
};

export type _IComponent = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type _IComponent_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IComponent_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IContent = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type _IContent_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IContent_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IContentAutocomplete = {
  __typename?: '_IContentAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type _IContentFacet = {
  __typename?: '_IContentFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _IContentOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type _IContentWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_IContentWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_IContentWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_IContentWhereInput>>>;
};

export type _IElement = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type _IElement_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IElement_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IExperience = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  composition?: Maybe<CompositionStructureNode>;
};


export type _IExperience_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IExperience_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IFolder = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type _IFolder_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IFolder_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IImage = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type _IImage_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IImage_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IMedia = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type _IMedia_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IMedia_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IPage = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type _IPage_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IPage_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _ISection = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  composition?: Maybe<CompositionStructureNode>;
};


export type _ISection_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _ISection_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IVideo = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type _IVideo_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IVideo_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _Image = IData & _IContent & _IImage & _IMedia & {
  __typename?: '_Image';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type _Image_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Image_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _ImageAutocomplete = {
  __typename?: '_ImageAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type _ImageFacet = {
  __typename?: '_ImageFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _ImageOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type _ImageOutput = {
  __typename?: '_ImageOutput';
  autocomplete?: Maybe<_ImageAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_ImageFacet>;
  items?: Maybe<Array<Maybe<_IImage>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _ImageOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ImageWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_ImageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_ImageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_ImageWhereInput>>>;
};

export type _Media = IData & _IContent & _IMedia & {
  __typename?: '_Media';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type _Media_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Media_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _MediaAutocomplete = {
  __typename?: '_MediaAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type _MediaFacet = {
  __typename?: '_MediaFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _MediaOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type _MediaOutput = {
  __typename?: '_MediaOutput';
  autocomplete?: Maybe<_MediaAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_MediaFacet>;
  items?: Maybe<Array<Maybe<_IMedia>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _MediaOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _MediaWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_MediaWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_MediaWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_MediaWhereInput>>>;
};

export type _Page = IData & _IContent & _IPage & {
  __typename?: '_Page';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type _Page_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Page_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _PageAutocomplete = {
  __typename?: '_PageAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type _PageFacet = {
  __typename?: '_PageFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _PageOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type _PageOutput = {
  __typename?: '_PageOutput';
  autocomplete?: Maybe<_PageAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_PageFacet>;
  items?: Maybe<Array<Maybe<_IPage>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _PageOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _PageWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_PageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_PageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_PageWhereInput>>>;
};

export type _Section = IData & _IComponent & _IContent & _ISection & {
  __typename?: '_Section';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  composition?: Maybe<CompositionStructureNode>;
};


export type _Section_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Section_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _SectionAutocomplete = {
  __typename?: '_SectionAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  composition?: Maybe<CompositionStructureNodeAutocomplete>;
};

export type _SectionFacet = {
  __typename?: '_SectionFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
  composition?: Maybe<CompositionStructureNodeFacet>;
};

export type _SectionOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  composition?: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type _SectionOutput = {
  __typename?: '_SectionOutput';
  autocomplete?: Maybe<_SectionAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_SectionFacet>;
  items?: Maybe<Array<Maybe<_ISection>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _SectionOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _SectionWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_SectionWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_SectionWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_SectionWhereInput>>>;
  composition?: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type _Video = IData & _IContent & _IMedia & _IVideo & {
  __typename?: '_Video';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type _Video_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Video_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _VideoAutocomplete = {
  __typename?: '_VideoAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type _VideoFacet = {
  __typename?: '_VideoFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _VideoOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type _VideoOutput = {
  __typename?: '_VideoOutput';
  autocomplete?: Maybe<_VideoAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_VideoFacet>;
  items?: Maybe<Array<Maybe<_IVideo>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _VideoOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _VideoWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_VideoWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_VideoWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_VideoWhereInput>>>;
};

export type hero = IData & _IComponent & _IContent & {
  __typename?: 'hero';
  Title?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type hero_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type hero_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type hero2 = IData & _IComponent & _IContent & {
  __typename?: 'hero2';
  Title?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type hero2_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type hero2_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type hero2Autocomplete = {
  __typename?: 'hero2Autocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type hero2Facet = {
  __typename?: 'hero2Facet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type hero2OrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type hero2Output = {
  __typename?: 'hero2Output';
  autocomplete?: Maybe<hero2Autocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<hero2Facet>;
  items?: Maybe<Array<Maybe<hero2>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type hero2OutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type hero2WhereInput = {
  _and?: InputMaybe<Array<InputMaybe<hero2WhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<hero2WhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<hero2WhereInput>>>;
};

export type hero3 = IData & _IComponent & _IContent & {
  __typename?: 'hero3';
  Title?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type hero3_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type hero3_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type hero3Autocomplete = {
  __typename?: 'hero3Autocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type hero3Facet = {
  __typename?: 'hero3Facet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type hero3OrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type hero3Output = {
  __typename?: 'hero3Output';
  autocomplete?: Maybe<hero3Autocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<hero3Facet>;
  items?: Maybe<Array<Maybe<hero3>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type hero3OutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type hero3WhereInput = {
  _and?: InputMaybe<Array<InputMaybe<hero3WhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<hero3WhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<hero3WhereInput>>>;
};

export type hero4 = IData & _IComponent & _IContent & {
  __typename?: 'hero4';
  Title?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type hero4_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type hero4_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type hero4Autocomplete = {
  __typename?: 'hero4Autocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type hero4Facet = {
  __typename?: 'hero4Facet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type hero4OrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type hero4Output = {
  __typename?: 'hero4Output';
  autocomplete?: Maybe<hero4Autocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<hero4Facet>;
  items?: Maybe<Array<Maybe<hero4>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type hero4OutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type hero4WhereInput = {
  _and?: InputMaybe<Array<InputMaybe<hero4WhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<hero4WhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<hero4WhereInput>>>;
};

export type heroAutocomplete = {
  __typename?: 'heroAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type heroBanner = IData & _IComponent & _IContent & {
  __typename?: 'heroBanner';
  Title?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type heroBanner_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type heroBanner_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type heroBanner2 = IData & _IComponent & _IContent & {
  __typename?: 'heroBanner2';
  Title?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type heroBanner2_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type heroBanner2_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type heroBanner2Autocomplete = {
  __typename?: 'heroBanner2Autocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type heroBanner2Facet = {
  __typename?: 'heroBanner2Facet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type heroBanner2OrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type heroBanner2Output = {
  __typename?: 'heroBanner2Output';
  autocomplete?: Maybe<heroBanner2Autocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<heroBanner2Facet>;
  items?: Maybe<Array<Maybe<heroBanner2>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type heroBanner2OutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type heroBanner2WhereInput = {
  _and?: InputMaybe<Array<InputMaybe<heroBanner2WhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<heroBanner2WhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<heroBanner2WhereInput>>>;
};

export type heroBanner3 = IData & _IComponent & _IContent & {
  __typename?: 'heroBanner3';
  Title?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type heroBanner3_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type heroBanner3_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type heroBanner3Autocomplete = {
  __typename?: 'heroBanner3Autocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type heroBanner3Facet = {
  __typename?: 'heroBanner3Facet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type heroBanner3OrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type heroBanner3Output = {
  __typename?: 'heroBanner3Output';
  autocomplete?: Maybe<heroBanner3Autocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<heroBanner3Facet>;
  items?: Maybe<Array<Maybe<heroBanner3>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type heroBanner3OutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type heroBanner3WhereInput = {
  _and?: InputMaybe<Array<InputMaybe<heroBanner3WhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<heroBanner3WhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<heroBanner3WhereInput>>>;
};

export type heroBanner4 = IData & _IComponent & _IContent & {
  __typename?: 'heroBanner4';
  Title?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type heroBanner4_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type heroBanner4_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type heroBanner4Autocomplete = {
  __typename?: 'heroBanner4Autocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type heroBanner4Facet = {
  __typename?: 'heroBanner4Facet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type heroBanner4OrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type heroBanner4Output = {
  __typename?: 'heroBanner4Output';
  autocomplete?: Maybe<heroBanner4Autocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<heroBanner4Facet>;
  items?: Maybe<Array<Maybe<heroBanner4>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type heroBanner4OutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type heroBanner4WhereInput = {
  _and?: InputMaybe<Array<InputMaybe<heroBanner4WhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<heroBanner4WhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<heroBanner4WhereInput>>>;
};

export type heroBanner5 = IData & _IComponent & _IContent & {
  __typename?: 'heroBanner5';
  Title?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type heroBanner5_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type heroBanner5_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type heroBanner5Autocomplete = {
  __typename?: 'heroBanner5Autocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type heroBanner5Facet = {
  __typename?: 'heroBanner5Facet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type heroBanner5OrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type heroBanner5Output = {
  __typename?: 'heroBanner5Output';
  autocomplete?: Maybe<heroBanner5Autocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<heroBanner5Facet>;
  items?: Maybe<Array<Maybe<heroBanner5>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type heroBanner5OutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type heroBanner5WhereInput = {
  _and?: InputMaybe<Array<InputMaybe<heroBanner5WhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<heroBanner5WhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<heroBanner5WhereInput>>>;
};

export type heroBanner6 = IData & _IComponent & _IContent & {
  __typename?: 'heroBanner6';
  Title?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type heroBanner6_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type heroBanner6_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type heroBanner6Autocomplete = {
  __typename?: 'heroBanner6Autocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type heroBanner6Facet = {
  __typename?: 'heroBanner6Facet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type heroBanner6OrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type heroBanner6Output = {
  __typename?: 'heroBanner6Output';
  autocomplete?: Maybe<heroBanner6Autocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<heroBanner6Facet>;
  items?: Maybe<Array<Maybe<heroBanner6>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type heroBanner6OutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type heroBanner6WhereInput = {
  _and?: InputMaybe<Array<InputMaybe<heroBanner6WhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<heroBanner6WhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<heroBanner6WhereInput>>>;
};

export type heroBannerAutocomplete = {
  __typename?: 'heroBannerAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type heroBannerFacet = {
  __typename?: 'heroBannerFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type heroBannerOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type heroBannerOutput = {
  __typename?: 'heroBannerOutput';
  autocomplete?: Maybe<heroBannerAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<heroBannerFacet>;
  items?: Maybe<Array<Maybe<heroBanner>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type heroBannerOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type heroBannerWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<heroBannerWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<heroBannerWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<heroBannerWhereInput>>>;
};

export type heroFacet = {
  __typename?: 'heroFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type heroOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type heroOutput = {
  __typename?: 'heroOutput';
  autocomplete?: Maybe<heroAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<heroFacet>;
  items?: Maybe<Array<Maybe<hero>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type heroOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type heroWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<heroWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<heroWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<heroWhereInput>>>;
};

export type necComponent = IData & _IComponent & _IContent & {
  __typename?: 'necComponent';
  Title?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type necComponent_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type necComponent_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type necComponentAutocomplete = {
  __typename?: 'necComponentAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type necComponentFacet = {
  __typename?: 'necComponentFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type necComponentOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type necComponentOutput = {
  __typename?: 'necComponentOutput';
  autocomplete?: Maybe<necComponentAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<necComponentFacet>;
  items?: Maybe<Array<Maybe<necComponent>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type necComponentOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type necComponentWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<necComponentWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<necComponentWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<necComponentWhereInput>>>;
};

export type newEelem = IData & _IComponent & _IContent & _IElement & {
  __typename?: 'newEelem';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  prp?: Maybe<Scalars['String']['output']>;
};


export type newEelem_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type newEelem_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type newEelemAutocomplete = {
  __typename?: 'newEelemAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type newEelemFacet = {
  __typename?: 'newEelemFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type newEelemOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type newEelemOutput = {
  __typename?: 'newEelemOutput';
  autocomplete?: Maybe<newEelemAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<newEelemFacet>;
  items?: Maybe<Array<Maybe<newEelem>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type newEelemOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type newEelemWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<newEelemWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<newEelemWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<newEelemWhereInput>>>;
};

export enum system_Locales {
  ALL = 'ALL',
  NEUTRAL = 'NEUTRAL'
}

export type getContentTypeQueryVariables = Exact<{
  key: Scalars['String']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<Array<Locales> | Locales>;
  path?: InputMaybe<Scalars['String']['input']>;
  domain?: InputMaybe<Scalars['String']['input']>;
}>;


export type getContentTypeQuery = { __typename?: 'Query', content?: { __typename?: '_ContentOutput', total?: number | null, items?: Array<{ __typename?: 'AIFreePrompt', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'AIPersonalizedPrompt', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'AnotherSearch', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'ArticleGroupPage', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'ArticleListElement', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'ArticlePage', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'BannerBlock', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'BlankExperience', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'BlankSection', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'BlockTest', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'ButtonBlock', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'CTAElement', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'CardBlock', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'DefaultImage', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'DefaultVideo', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'Dictionary', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'DictionaryItem', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'FoodSuggestionItem', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'FoodSuggestionItemBlock', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'GenericMedia', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'HeaderBlock', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'HeadingElement', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'Image', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'ImageElement', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'ImageMedia', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'MegaMenuGroupBlock', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'NavigationMenuBlock', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'NewDemopage', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'OfficeLocation', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'PageSeoSettings', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'PagecreatedforSaaSEvaluation', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'ParagraphElement', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'SearchPage', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'SysContentFolder', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'TestContent', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'TestimonialElement', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'Video', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'VideoMedia', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'WebsiteFooter', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: '_Component', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: '_Content', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: '_Element', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: '_Experience', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: '_Folder', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: '_Image', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: '_Media', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: '_Page', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: '_Section', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: '_Video', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'hero', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'hero2', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'hero3', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'hero4', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'heroBanner', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'heroBanner2', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'heroBanner3', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'heroBanner4', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'heroBanner5', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'heroBanner6', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'necComponent', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'newEelem', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | null> | null } | null };

export type ReferenceDataFragment = { __typename?: 'ContentReference', key?: string | null, url?: (
    { __typename?: 'ContentUrl' }
    & { ' $fragmentRefs'?: { 'LinkDataFragment': LinkDataFragment } }
  ) | null } & { ' $fragmentName'?: 'ReferenceDataFragment' };

export type LinkItemDataFragment = { __typename?: 'Link', title?: string | null, text?: string | null, target?: string | null, url?: (
    { __typename?: 'ContentUrl' }
    & { ' $fragmentRefs'?: { 'LinkDataFragment': LinkDataFragment } }
  ) | null } & { ' $fragmentName'?: 'LinkItemDataFragment' };

type ElementData_AIFreePrompt_Fragment = (
  { __typename?: 'AIFreePrompt' }
  & { ' $fragmentRefs'?: { 'IElementData_AIFreePrompt_Fragment': IElementData_AIFreePrompt_Fragment } }
) & { ' $fragmentName'?: 'ElementData_AIFreePrompt_Fragment' };

type ElementData_AIPersonalizedPrompt_Fragment = (
  { __typename?: 'AIPersonalizedPrompt' }
  & { ' $fragmentRefs'?: { 'IElementData_AIPersonalizedPrompt_Fragment': IElementData_AIPersonalizedPrompt_Fragment } }
) & { ' $fragmentName'?: 'ElementData_AIPersonalizedPrompt_Fragment' };

type ElementData_ArticleListElement_Fragment = (
  { __typename?: 'ArticleListElement' }
  & { ' $fragmentRefs'?: { 'IElementData_ArticleListElement_Fragment': IElementData_ArticleListElement_Fragment;'ArticleListElementDataFragment': ArticleListElementDataFragment } }
) & { ' $fragmentName'?: 'ElementData_ArticleListElement_Fragment' };

type ElementData_CTAElement_Fragment = (
  { __typename?: 'CTAElement' }
  & { ' $fragmentRefs'?: { 'IElementData_CTAElement_Fragment': IElementData_CTAElement_Fragment;'CTAElementDataFragment': CTAElementDataFragment } }
) & { ' $fragmentName'?: 'ElementData_CTAElement_Fragment' };

type ElementData_FoodSuggestionItem_Fragment = (
  { __typename?: 'FoodSuggestionItem' }
  & { ' $fragmentRefs'?: { 'IElementData_FoodSuggestionItem_Fragment': IElementData_FoodSuggestionItem_Fragment } }
) & { ' $fragmentName'?: 'ElementData_FoodSuggestionItem_Fragment' };

type ElementData_HeadingElement_Fragment = (
  { __typename?: 'HeadingElement' }
  & { ' $fragmentRefs'?: { 'IElementData_HeadingElement_Fragment': IElementData_HeadingElement_Fragment;'HeadingElementDataFragment': HeadingElementDataFragment } }
) & { ' $fragmentName'?: 'ElementData_HeadingElement_Fragment' };

type ElementData_ImageElement_Fragment = (
  { __typename?: 'ImageElement' }
  & { ' $fragmentRefs'?: { 'IElementData_ImageElement_Fragment': IElementData_ImageElement_Fragment;'ImageElementDataFragment': ImageElementDataFragment } }
) & { ' $fragmentName'?: 'ElementData_ImageElement_Fragment' };

type ElementData_ParagraphElement_Fragment = (
  { __typename?: 'ParagraphElement' }
  & { ' $fragmentRefs'?: { 'IElementData_ParagraphElement_Fragment': IElementData_ParagraphElement_Fragment;'ParagraphElementDataFragment': ParagraphElementDataFragment } }
) & { ' $fragmentName'?: 'ElementData_ParagraphElement_Fragment' };

type ElementData_TestimonialElement_Fragment = (
  { __typename?: 'TestimonialElement' }
  & { ' $fragmentRefs'?: { 'IElementData_TestimonialElement_Fragment': IElementData_TestimonialElement_Fragment;'TestimonialElementDataFragment': TestimonialElementDataFragment } }
) & { ' $fragmentName'?: 'ElementData_TestimonialElement_Fragment' };

type ElementData__Element_Fragment = (
  { __typename?: '_Element' }
  & { ' $fragmentRefs'?: { 'IElementData__Element_Fragment': IElementData__Element_Fragment } }
) & { ' $fragmentName'?: 'ElementData__Element_Fragment' };

type ElementData_newEelem_Fragment = (
  { __typename?: 'newEelem' }
  & { ' $fragmentRefs'?: { 'IElementData_newEelem_Fragment': IElementData_newEelem_Fragment } }
) & { ' $fragmentName'?: 'ElementData_newEelem_Fragment' };

export type ElementDataFragment = ElementData_AIFreePrompt_Fragment | ElementData_AIPersonalizedPrompt_Fragment | ElementData_ArticleListElement_Fragment | ElementData_CTAElement_Fragment | ElementData_FoodSuggestionItem_Fragment | ElementData_HeadingElement_Fragment | ElementData_ImageElement_Fragment | ElementData_ParagraphElement_Fragment | ElementData_TestimonialElement_Fragment | ElementData__Element_Fragment | ElementData_newEelem_Fragment;

type ExperienceData_BlankExperience_Fragment = { __typename?: 'BlankExperience', composition?: (
    { __typename?: 'CompositionStructureNode' }
    & { ' $fragmentRefs'?: { 'CompositionData_CompositionStructureNode_Fragment': CompositionData_CompositionStructureNode_Fragment } }
  ) | null } & { ' $fragmentName'?: 'ExperienceData_BlankExperience_Fragment' };

type ExperienceData__Experience_Fragment = { __typename?: '_Experience', composition?: (
    { __typename?: 'CompositionStructureNode' }
    & { ' $fragmentRefs'?: { 'CompositionData_CompositionStructureNode_Fragment': CompositionData_CompositionStructureNode_Fragment } }
  ) | null } & { ' $fragmentName'?: 'ExperienceData__Experience_Fragment' };

export type ExperienceDataFragment = ExperienceData_BlankExperience_Fragment | ExperienceData__Experience_Fragment;

type IElementData_AIFreePrompt_Fragment = { __typename?: 'AIFreePrompt', _type: 'AIFreePrompt', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_AIFreePrompt_Fragment' };

type IElementData_AIPersonalizedPrompt_Fragment = { __typename?: 'AIPersonalizedPrompt', _type: 'AIPersonalizedPrompt', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_AIPersonalizedPrompt_Fragment' };

type IElementData_ArticleListElement_Fragment = { __typename?: 'ArticleListElement', _type: 'ArticleListElement', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_ArticleListElement_Fragment' };

type IElementData_CTAElement_Fragment = { __typename?: 'CTAElement', _type: 'CTAElement', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_CTAElement_Fragment' };

type IElementData_FoodSuggestionItem_Fragment = { __typename?: 'FoodSuggestionItem', _type: 'FoodSuggestionItem', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_FoodSuggestionItem_Fragment' };

type IElementData_HeadingElement_Fragment = { __typename?: 'HeadingElement', _type: 'HeadingElement', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_HeadingElement_Fragment' };

type IElementData_ImageElement_Fragment = { __typename?: 'ImageElement', _type: 'ImageElement', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_ImageElement_Fragment' };

type IElementData_ParagraphElement_Fragment = { __typename?: 'ParagraphElement', _type: 'ParagraphElement', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_ParagraphElement_Fragment' };

type IElementData_TestimonialElement_Fragment = { __typename?: 'TestimonialElement', _type: 'TestimonialElement', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_TestimonialElement_Fragment' };

type IElementData__Element_Fragment = { __typename?: '_Element', _type: '_Element', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData__Element_Fragment' };

type IElementData_newEelem_Fragment = { __typename?: 'newEelem', _type: 'newEelem', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_newEelem_Fragment' };

export type IElementDataFragment = IElementData_AIFreePrompt_Fragment | IElementData_AIPersonalizedPrompt_Fragment | IElementData_ArticleListElement_Fragment | IElementData_CTAElement_Fragment | IElementData_FoodSuggestionItem_Fragment | IElementData_HeadingElement_Fragment | IElementData_ImageElement_Fragment | IElementData_ParagraphElement_Fragment | IElementData_TestimonialElement_Fragment | IElementData__Element_Fragment | IElementData_newEelem_Fragment;

export type CardBlockDataFragment = { __typename?: 'CardBlock', heading?: string | null, subheading?: string | null, color?: string | null, layout?: string | null, description?: { __typename?: 'RichText', json?: any | null } | null, icon?: (
    { __typename?: 'ContentReference' }
    & { ' $fragmentRefs'?: { 'ReferenceDataFragment': ReferenceDataFragment } }
  ) | null, image?: (
    { __typename?: 'ContentReference' }
    & { ' $fragmentRefs'?: { 'ReferenceDataFragment': ReferenceDataFragment } }
  ) | null, link?: (
    { __typename?: 'ButtonBlockProperty' }
    & { ' $fragmentRefs'?: { 'ButtonBlockPropertyDataFragment': ButtonBlockPropertyDataFragment } }
  ) | null } & { ' $fragmentName'?: 'CardBlockDataFragment' };

export type OfficeLocationDataFragment = { __typename?: 'OfficeLocation', title?: string | null, street1?: string | null, street2?: string | null, postalcode?: string | null, city?: string | null, country?: string | null, phone?: string | null, email?: string | null } & { ' $fragmentName'?: 'OfficeLocationDataFragment' };

export type ArticleListElementDataFragment = { __typename?: 'ArticleListElement', articleListCount?: number | null } & { ' $fragmentName'?: 'ArticleListElementDataFragment' };

export type getArticleListElementItemsQueryVariables = Exact<{
  count?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
}>;


export type getArticleListElementItemsQuery = { __typename?: 'Query', ArticlePage?: { __typename?: 'ArticlePageOutput', items?: Array<(
      { __typename?: 'ArticlePage', articleTitle?: string | null, articleAuthors?: Array<string | null> | null, articleMeta?: { __typename?: 'ContentMetadata', key?: string | null, published?: any | null, lastModified?: any | null } | { __typename?: 'InstanceMetadata', key?: string | null, published?: any | null, lastModified?: any | null } | { __typename?: 'ItemMetadata', key?: string | null, published?: any | null, lastModified?: any | null } | { __typename?: 'MediaMetadata', key?: string | null, published?: any | null, lastModified?: any | null } | null, articleSummary?: { __typename?: 'RichText', json?: any | null } | null, articleHeroImage?: (
        { __typename?: 'ContentReference' }
        & { ' $fragmentRefs'?: { 'ReferenceDataFragment': ReferenceDataFragment } }
      ) | null }
      & { ' $fragmentRefs'?: { 'IContentData_ArticlePage_Fragment': IContentData_ArticlePage_Fragment } }
    ) | null> | null } | null };

export type BlankExperienceDataFragment = (
  { __typename?: 'BlankExperience' }
  & { ' $fragmentRefs'?: { 'ExperienceData_BlankExperience_Fragment': ExperienceData_BlankExperience_Fragment } }
) & { ' $fragmentName'?: 'BlankExperienceDataFragment' };

export type getBlankExperienceMetaDataQueryVariables = Exact<{
  key: Scalars['String']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
}>;


export type getBlankExperienceMetaDataQuery = { __typename?: 'Query', BlankExperience?: { __typename?: 'BlankExperienceOutput', items?: Array<{ __typename?: 'BlankExperience', _metadata?: { __typename?: 'ContentMetadata', displayName?: string | null } | { __typename?: 'InstanceMetadata', displayName?: string | null } | { __typename?: 'ItemMetadata', displayName?: string | null } | { __typename?: 'MediaMetadata', displayName?: string | null } | null, SeoSettings?: { __typename?: 'PageSeoSettingsProperty', metaTitle?: string | null } | null } | null> | null } | null };

export type ArticleGroupPageDataFragment = { __typename?: 'ArticleGroupPage', articleGroupTitle?: string | null, articleGroupIntro?: { __typename?: 'RichText', json?: any | null } | null, MainContent?: Array<(
    { __typename?: 'AIFreePrompt' }
    & { ' $fragmentRefs'?: { 'BlockData_AIFreePrompt_Fragment': BlockData_AIFreePrompt_Fragment } }
  ) | (
    { __typename?: 'AIPersonalizedPrompt' }
    & { ' $fragmentRefs'?: { 'BlockData_AIPersonalizedPrompt_Fragment': BlockData_AIPersonalizedPrompt_Fragment } }
  ) | (
    { __typename?: 'AnotherSearch' }
    & { ' $fragmentRefs'?: { 'BlockData_AnotherSearch_Fragment': BlockData_AnotherSearch_Fragment } }
  ) | (
    { __typename?: 'ArticleGroupPage' }
    & { ' $fragmentRefs'?: { 'BlockData_ArticleGroupPage_Fragment': BlockData_ArticleGroupPage_Fragment } }
  ) | (
    { __typename?: 'ArticleListElement' }
    & { ' $fragmentRefs'?: { 'BlockData_ArticleListElement_Fragment': BlockData_ArticleListElement_Fragment } }
  ) | (
    { __typename?: 'ArticlePage' }
    & { ' $fragmentRefs'?: { 'BlockData_ArticlePage_Fragment': BlockData_ArticlePage_Fragment } }
  ) | (
    { __typename?: 'BannerBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_BannerBlock_Fragment': BlockData_BannerBlock_Fragment } }
  ) | (
    { __typename?: 'BlankExperience' }
    & { ' $fragmentRefs'?: { 'BlockData_BlankExperience_Fragment': BlockData_BlankExperience_Fragment } }
  ) | (
    { __typename?: 'BlankSection' }
    & { ' $fragmentRefs'?: { 'BlockData_BlankSection_Fragment': BlockData_BlankSection_Fragment } }
  ) | (
    { __typename?: 'BlockTest' }
    & { ' $fragmentRefs'?: { 'BlockData_BlockTest_Fragment': BlockData_BlockTest_Fragment } }
  ) | (
    { __typename?: 'ButtonBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_ButtonBlock_Fragment': BlockData_ButtonBlock_Fragment } }
  ) | (
    { __typename?: 'CTAElement' }
    & { ' $fragmentRefs'?: { 'BlockData_CTAElement_Fragment': BlockData_CTAElement_Fragment } }
  ) | (
    { __typename?: 'CardBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_CardBlock_Fragment': BlockData_CardBlock_Fragment } }
  ) | (
    { __typename?: 'DefaultImage' }
    & { ' $fragmentRefs'?: { 'BlockData_DefaultImage_Fragment': BlockData_DefaultImage_Fragment } }
  ) | (
    { __typename?: 'DefaultVideo' }
    & { ' $fragmentRefs'?: { 'BlockData_DefaultVideo_Fragment': BlockData_DefaultVideo_Fragment } }
  ) | (
    { __typename?: 'Dictionary' }
    & { ' $fragmentRefs'?: { 'BlockData_Dictionary_Fragment': BlockData_Dictionary_Fragment } }
  ) | (
    { __typename?: 'DictionaryItem' }
    & { ' $fragmentRefs'?: { 'BlockData_DictionaryItem_Fragment': BlockData_DictionaryItem_Fragment } }
  ) | (
    { __typename?: 'FoodSuggestionItem' }
    & { ' $fragmentRefs'?: { 'BlockData_FoodSuggestionItem_Fragment': BlockData_FoodSuggestionItem_Fragment } }
  ) | (
    { __typename?: 'FoodSuggestionItemBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_FoodSuggestionItemBlock_Fragment': BlockData_FoodSuggestionItemBlock_Fragment } }
  ) | (
    { __typename?: 'GenericMedia' }
    & { ' $fragmentRefs'?: { 'BlockData_GenericMedia_Fragment': BlockData_GenericMedia_Fragment } }
  ) | (
    { __typename?: 'HeaderBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_HeaderBlock_Fragment': BlockData_HeaderBlock_Fragment } }
  ) | (
    { __typename?: 'HeadingElement' }
    & { ' $fragmentRefs'?: { 'BlockData_HeadingElement_Fragment': BlockData_HeadingElement_Fragment } }
  ) | (
    { __typename?: 'Image' }
    & { ' $fragmentRefs'?: { 'BlockData_Image_Fragment': BlockData_Image_Fragment } }
  ) | (
    { __typename?: 'ImageElement' }
    & { ' $fragmentRefs'?: { 'BlockData_ImageElement_Fragment': BlockData_ImageElement_Fragment } }
  ) | (
    { __typename?: 'ImageMedia' }
    & { ' $fragmentRefs'?: { 'BlockData_ImageMedia_Fragment': BlockData_ImageMedia_Fragment } }
  ) | (
    { __typename?: 'MegaMenuGroupBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_MegaMenuGroupBlock_Fragment': BlockData_MegaMenuGroupBlock_Fragment } }
  ) | (
    { __typename?: 'NavigationMenuBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_NavigationMenuBlock_Fragment': BlockData_NavigationMenuBlock_Fragment } }
  ) | (
    { __typename?: 'NewDemopage' }
    & { ' $fragmentRefs'?: { 'BlockData_NewDemopage_Fragment': BlockData_NewDemopage_Fragment } }
  ) | (
    { __typename?: 'OfficeLocation' }
    & { ' $fragmentRefs'?: { 'BlockData_OfficeLocation_Fragment': BlockData_OfficeLocation_Fragment } }
  ) | (
    { __typename?: 'PageSeoSettings' }
    & { ' $fragmentRefs'?: { 'BlockData_PageSeoSettings_Fragment': BlockData_PageSeoSettings_Fragment } }
  ) | (
    { __typename?: 'PagecreatedforSaaSEvaluation' }
    & { ' $fragmentRefs'?: { 'BlockData_PagecreatedforSaaSEvaluation_Fragment': BlockData_PagecreatedforSaaSEvaluation_Fragment } }
  ) | (
    { __typename?: 'ParagraphElement' }
    & { ' $fragmentRefs'?: { 'BlockData_ParagraphElement_Fragment': BlockData_ParagraphElement_Fragment } }
  ) | (
    { __typename?: 'SearchPage' }
    & { ' $fragmentRefs'?: { 'BlockData_SearchPage_Fragment': BlockData_SearchPage_Fragment } }
  ) | (
    { __typename?: 'SysContentFolder' }
    & { ' $fragmentRefs'?: { 'BlockData_SysContentFolder_Fragment': BlockData_SysContentFolder_Fragment } }
  ) | (
    { __typename?: 'TestContent' }
    & { ' $fragmentRefs'?: { 'BlockData_TestContent_Fragment': BlockData_TestContent_Fragment } }
  ) | (
    { __typename?: 'TestimonialElement' }
    & { ' $fragmentRefs'?: { 'BlockData_TestimonialElement_Fragment': BlockData_TestimonialElement_Fragment } }
  ) | (
    { __typename?: 'Video' }
    & { ' $fragmentRefs'?: { 'BlockData_Video_Fragment': BlockData_Video_Fragment } }
  ) | (
    { __typename?: 'VideoMedia' }
    & { ' $fragmentRefs'?: { 'BlockData_VideoMedia_Fragment': BlockData_VideoMedia_Fragment } }
  ) | (
    { __typename?: 'WebsiteFooter' }
    & { ' $fragmentRefs'?: { 'BlockData_WebsiteFooter_Fragment': BlockData_WebsiteFooter_Fragment } }
  ) | (
    { __typename?: '_Component' }
    & { ' $fragmentRefs'?: { 'BlockData__Component_Fragment': BlockData__Component_Fragment } }
  ) | (
    { __typename?: '_Content' }
    & { ' $fragmentRefs'?: { 'BlockData__Content_Fragment': BlockData__Content_Fragment } }
  ) | (
    { __typename?: '_Element' }
    & { ' $fragmentRefs'?: { 'BlockData__Element_Fragment': BlockData__Element_Fragment } }
  ) | (
    { __typename?: '_Experience' }
    & { ' $fragmentRefs'?: { 'BlockData__Experience_Fragment': BlockData__Experience_Fragment } }
  ) | (
    { __typename?: '_Folder' }
    & { ' $fragmentRefs'?: { 'BlockData__Folder_Fragment': BlockData__Folder_Fragment } }
  ) | (
    { __typename?: '_Image' }
    & { ' $fragmentRefs'?: { 'BlockData__Image_Fragment': BlockData__Image_Fragment } }
  ) | (
    { __typename?: '_Media' }
    & { ' $fragmentRefs'?: { 'BlockData__Media_Fragment': BlockData__Media_Fragment } }
  ) | (
    { __typename?: '_Page' }
    & { ' $fragmentRefs'?: { 'BlockData__Page_Fragment': BlockData__Page_Fragment } }
  ) | (
    { __typename?: '_Section' }
    & { ' $fragmentRefs'?: { 'BlockData__Section_Fragment': BlockData__Section_Fragment } }
  ) | (
    { __typename?: '_Video' }
    & { ' $fragmentRefs'?: { 'BlockData__Video_Fragment': BlockData__Video_Fragment } }
  ) | (
    { __typename?: 'hero' }
    & { ' $fragmentRefs'?: { 'BlockData_hero_Fragment': BlockData_hero_Fragment } }
  ) | (
    { __typename?: 'hero2' }
    & { ' $fragmentRefs'?: { 'BlockData_hero2_Fragment': BlockData_hero2_Fragment } }
  ) | (
    { __typename?: 'hero3' }
    & { ' $fragmentRefs'?: { 'BlockData_hero3_Fragment': BlockData_hero3_Fragment } }
  ) | (
    { __typename?: 'hero4' }
    & { ' $fragmentRefs'?: { 'BlockData_hero4_Fragment': BlockData_hero4_Fragment } }
  ) | (
    { __typename?: 'heroBanner' }
    & { ' $fragmentRefs'?: { 'BlockData_heroBanner_Fragment': BlockData_heroBanner_Fragment } }
  ) | (
    { __typename?: 'heroBanner2' }
    & { ' $fragmentRefs'?: { 'BlockData_heroBanner2_Fragment': BlockData_heroBanner2_Fragment } }
  ) | (
    { __typename?: 'heroBanner3' }
    & { ' $fragmentRefs'?: { 'BlockData_heroBanner3_Fragment': BlockData_heroBanner3_Fragment } }
  ) | (
    { __typename?: 'heroBanner4' }
    & { ' $fragmentRefs'?: { 'BlockData_heroBanner4_Fragment': BlockData_heroBanner4_Fragment } }
  ) | (
    { __typename?: 'heroBanner5' }
    & { ' $fragmentRefs'?: { 'BlockData_heroBanner5_Fragment': BlockData_heroBanner5_Fragment } }
  ) | (
    { __typename?: 'heroBanner6' }
    & { ' $fragmentRefs'?: { 'BlockData_heroBanner6_Fragment': BlockData_heroBanner6_Fragment } }
  ) | (
    { __typename?: 'necComponent' }
    & { ' $fragmentRefs'?: { 'BlockData_necComponent_Fragment': BlockData_necComponent_Fragment } }
  ) | (
    { __typename?: 'newEelem' }
    & { ' $fragmentRefs'?: { 'BlockData_newEelem_Fragment': BlockData_newEelem_Fragment } }
  ) | null> | null } & { ' $fragmentName'?: 'ArticleGroupPageDataFragment' };

export type getArticleGroupPageItemsQueryVariables = Exact<{
  key: Scalars['String']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type getArticleGroupPageItemsQuery = { __typename?: 'Query', group?: { __typename?: 'ArticleGroupPageOutput', data?: Array<{ __typename?: 'ArticleGroupPage', children?: { __typename?: 'QueryRef', listing?: { __typename?: 'ArticlePageOutput', total?: number | null, items?: Array<(
            { __typename?: 'ArticlePage', articleTitle?: string | null, _metadata?: { __typename?: 'ContentMetadata', published?: any | null } | { __typename?: 'InstanceMetadata', published?: any | null } | { __typename?: 'ItemMetadata', published?: any | null } | { __typename?: 'MediaMetadata', published?: any | null } | null, articleHeroImage?: (
              { __typename?: 'ContentReference' }
              & { ' $fragmentRefs'?: { 'ReferenceDataFragment': ReferenceDataFragment } }
            ) | null, articleSummary?: { __typename?: 'RichText', json?: any | null } | null }
            & { ' $fragmentRefs'?: { 'IContentData_ArticlePage_Fragment': IContentData_ArticlePage_Fragment } }
          ) | null> | null } | null } | null } | null> | null } | null };

export type getArticlePageMetaDataQueryVariables = Exact<{
  key: Scalars['String']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
}>;


export type getArticlePageMetaDataQuery = { __typename?: 'Query', BlankExperience?: { __typename?: 'BlankExperienceOutput', items?: Array<{ __typename?: 'BlankExperience', _metadata?: { __typename?: 'ContentMetadata', displayName?: string | null } | { __typename?: 'InstanceMetadata', displayName?: string | null } | { __typename?: 'ItemMetadata', displayName?: string | null } | { __typename?: 'MediaMetadata', displayName?: string | null } | null, SeoSettings?: { __typename?: 'PageSeoSettingsProperty', metaTitle?: string | null } | null } | null> | null } | null };

export type ArticlePageDataFragment = { __typename?: 'ArticlePage', articleAuthors?: Array<string | null> | null, articleTitle?: string | null, metadata?: { __typename?: 'ContentMetadata', published?: any | null } | { __typename?: 'InstanceMetadata', published?: any | null } | { __typename?: 'ItemMetadata', published?: any | null } | { __typename?: 'MediaMetadata', published?: any | null } | null, articleHeroImage?: (
    { __typename?: 'ContentReference' }
    & { ' $fragmentRefs'?: { 'ReferenceDataFragment': ReferenceDataFragment } }
  ) | null, articleBody?: { __typename?: 'RichText', json?: any | null } | null } & { ' $fragmentName'?: 'ArticlePageDataFragment' };

export type ButtonBlockDataFragment = { __typename?: 'ButtonBlock', text?: string | null, className?: string | null, buttonType?: string | null, variant?: string | null, link?: (
    { __typename?: 'ContentUrl' }
    & { ' $fragmentRefs'?: { 'LinkDataFragment': LinkDataFragment } }
  ) | null } & { ' $fragmentName'?: 'ButtonBlockDataFragment' };

export type ButtonBlockPropertyDataFragment = { __typename?: 'ButtonBlockProperty', text?: string | null, className?: string | null, buttonType?: string | null, variant?: string | null, link?: (
    { __typename?: 'ContentUrl' }
    & { ' $fragmentRefs'?: { 'LinkDataFragment': LinkDataFragment } }
  ) | null } & { ' $fragmentName'?: 'ButtonBlockPropertyDataFragment' };

export type CTAElementDataFragment = { __typename?: 'CTAElement', text?: string | null, link?: (
    { __typename?: 'ContentUrl' }
    & { ' $fragmentRefs'?: { 'LinkDataFragment': LinkDataFragment } }
  ) | null } & { ' $fragmentName'?: 'CTAElementDataFragment' };

export type HeadingElementDataFragment = { __typename?: 'HeadingElement', headingText?: string | null, AIPrompt?: string | null } & { ' $fragmentName'?: 'HeadingElementDataFragment' };

export type ImageElementDataFragment = { __typename?: 'ImageElement', altText?: string | null, imageLink?: (
    { __typename?: 'ContentReference' }
    & { ' $fragmentRefs'?: { 'ReferenceDataFragment': ReferenceDataFragment } }
  ) | null } & { ' $fragmentName'?: 'ImageElementDataFragment' };

export type ParagraphElementDataFragment = { __typename?: 'ParagraphElement', paragraph?: { __typename?: 'RichText', json?: any | null } | null } & { ' $fragmentName'?: 'ParagraphElementDataFragment' };

export type TestimonialElementDataFragment = { __typename?: 'TestimonialElement', referenceTitle?: string | null, customerName?: string | null, customerLocation?: string | null, referenceText?: { __typename?: 'RichText', json?: any | null } | null, customerImage?: (
    { __typename?: 'ContentReference' }
    & { ' $fragmentRefs'?: { 'ReferenceDataFragment': ReferenceDataFragment } }
  ) | null } & { ' $fragmentName'?: 'TestimonialElementDataFragment' };

export type getFooterQueryVariables = Exact<{ [key: string]: never; }>;


export type getFooterQuery = { __typename?: 'Query', footer?: { __typename?: 'WebsiteFooterOutput', total?: number | null, items?: Array<{ __typename?: 'WebsiteFooter', logoAlt?: string | null, address?: Array<{ __typename?: 'AIFreePrompt' } | { __typename?: 'AIPersonalizedPrompt' } | { __typename?: 'AnotherSearch' } | { __typename?: 'ArticleGroupPage' } | { __typename?: 'ArticleListElement' } | { __typename?: 'ArticlePage' } | { __typename?: 'BannerBlock' } | { __typename?: 'BlankExperience' } | { __typename?: 'BlankSection' } | { __typename?: 'BlockTest' } | { __typename?: 'ButtonBlock' } | { __typename?: 'CTAElement' } | { __typename?: 'CardBlock' } | { __typename?: 'DefaultImage' } | { __typename?: 'DefaultVideo' } | { __typename?: 'Dictionary' } | { __typename?: 'DictionaryItem' } | { __typename?: 'FoodSuggestionItem' } | { __typename?: 'FoodSuggestionItemBlock' } | { __typename?: 'GenericMedia' } | { __typename?: 'HeaderBlock' } | { __typename?: 'HeadingElement' } | { __typename?: 'Image' } | { __typename?: 'ImageElement' } | { __typename?: 'ImageMedia' } | { __typename?: 'MegaMenuGroupBlock' } | { __typename?: 'NavigationMenuBlock' } | { __typename?: 'NewDemopage' } | (
        { __typename?: 'OfficeLocation' }
        & { ' $fragmentRefs'?: { 'OfficeLocationDataFragment': OfficeLocationDataFragment } }
      ) | { __typename?: 'PageSeoSettings' } | { __typename?: 'PagecreatedforSaaSEvaluation' } | { __typename?: 'ParagraphElement' } | { __typename?: 'SearchPage' } | { __typename?: 'SysContentFolder' } | { __typename?: 'TestContent' } | { __typename?: 'TestimonialElement' } | { __typename?: 'Video' } | { __typename?: 'VideoMedia' } | { __typename?: 'WebsiteFooter' } | { __typename?: '_Component' } | { __typename?: '_Content' } | { __typename?: '_Element' } | { __typename?: '_Experience' } | { __typename?: '_Folder' } | { __typename?: '_Image' } | { __typename?: '_Media' } | { __typename?: '_Page' } | { __typename?: '_Section' } | { __typename?: '_Video' } | { __typename?: 'hero' } | { __typename?: 'hero2' } | { __typename?: 'hero3' } | { __typename?: 'hero4' } | { __typename?: 'heroBanner' } | { __typename?: 'heroBanner2' } | { __typename?: 'heroBanner3' } | { __typename?: 'heroBanner4' } | { __typename?: 'heroBanner5' } | { __typename?: 'heroBanner6' } | { __typename?: 'necComponent' } | { __typename?: 'newEelem' } | null> | null, firstMenu?: (
        { __typename?: 'NavigationMenuBlockProperty' }
        & { ' $fragmentRefs'?: { 'MenuContentFragment': MenuContentFragment } }
      ) | null, secondMenu?: (
        { __typename?: 'NavigationMenuBlockProperty' }
        & { ' $fragmentRefs'?: { 'MenuContentFragment': MenuContentFragment } }
      ) | null, thirdMenu?: (
        { __typename?: 'NavigationMenuBlockProperty' }
        & { ' $fragmentRefs'?: { 'MenuContentFragment': MenuContentFragment } }
      ) | null, logo?: (
        { __typename?: 'ContentReference' }
        & { ' $fragmentRefs'?: { 'ReferenceDataFragment': ReferenceDataFragment } }
      ) | null, legal?: Array<(
        { __typename?: 'Link' }
        & { ' $fragmentRefs'?: { 'LinkItemDataFragment': LinkItemDataFragment } }
      ) | null> | null } | null> | null } | null };

export type MenuContentFragment = { __typename?: 'NavigationMenuBlockProperty', heading?: string | null, links?: Array<(
    { __typename?: 'Link' }
    & { ' $fragmentRefs'?: { 'LinkItemDataFragment': LinkItemDataFragment } }
  ) | null> | null } & { ' $fragmentName'?: 'MenuContentFragment' };

export type getHeaderQueryVariables = Exact<{ [key: string]: never; }>;


export type getHeaderQuery = { __typename?: 'Query', menuItems?: { __typename?: 'HeaderBlockOutput', items?: Array<{ __typename?: 'HeaderBlock', logo?: (
        { __typename?: 'ContentReference' }
        & { ' $fragmentRefs'?: { 'ReferenceDataFragment': ReferenceDataFragment } }
      ) | null, darkLogo?: (
        { __typename?: 'ContentReference' }
        & { ' $fragmentRefs'?: { 'ReferenceDataFragment': ReferenceDataFragment } }
      ) | null, headerNavigation?: Array<(
        { __typename?: 'AIFreePrompt' }
        & { ' $fragmentRefs'?: { 'IContentData_AIFreePrompt_Fragment': IContentData_AIFreePrompt_Fragment } }
      ) | (
        { __typename?: 'AIPersonalizedPrompt' }
        & { ' $fragmentRefs'?: { 'IContentData_AIPersonalizedPrompt_Fragment': IContentData_AIPersonalizedPrompt_Fragment } }
      ) | (
        { __typename?: 'AnotherSearch' }
        & { ' $fragmentRefs'?: { 'IContentData_AnotherSearch_Fragment': IContentData_AnotherSearch_Fragment } }
      ) | (
        { __typename?: 'ArticleGroupPage' }
        & { ' $fragmentRefs'?: { 'IContentData_ArticleGroupPage_Fragment': IContentData_ArticleGroupPage_Fragment } }
      ) | (
        { __typename?: 'ArticleListElement' }
        & { ' $fragmentRefs'?: { 'IContentData_ArticleListElement_Fragment': IContentData_ArticleListElement_Fragment } }
      ) | (
        { __typename?: 'ArticlePage' }
        & { ' $fragmentRefs'?: { 'IContentData_ArticlePage_Fragment': IContentData_ArticlePage_Fragment } }
      ) | (
        { __typename?: 'BannerBlock' }
        & { ' $fragmentRefs'?: { 'IContentData_BannerBlock_Fragment': IContentData_BannerBlock_Fragment } }
      ) | (
        { __typename?: 'BlankExperience' }
        & { ' $fragmentRefs'?: { 'IContentData_BlankExperience_Fragment': IContentData_BlankExperience_Fragment } }
      ) | (
        { __typename?: 'BlankSection' }
        & { ' $fragmentRefs'?: { 'IContentData_BlankSection_Fragment': IContentData_BlankSection_Fragment } }
      ) | (
        { __typename?: 'BlockTest' }
        & { ' $fragmentRefs'?: { 'IContentData_BlockTest_Fragment': IContentData_BlockTest_Fragment } }
      ) | (
        { __typename?: 'ButtonBlock' }
        & { ' $fragmentRefs'?: { 'IContentData_ButtonBlock_Fragment': IContentData_ButtonBlock_Fragment } }
      ) | (
        { __typename?: 'CTAElement' }
        & { ' $fragmentRefs'?: { 'IContentData_CTAElement_Fragment': IContentData_CTAElement_Fragment } }
      ) | (
        { __typename?: 'CardBlock' }
        & { ' $fragmentRefs'?: { 'IContentData_CardBlock_Fragment': IContentData_CardBlock_Fragment } }
      ) | (
        { __typename?: 'DefaultImage' }
        & { ' $fragmentRefs'?: { 'IContentData_DefaultImage_Fragment': IContentData_DefaultImage_Fragment } }
      ) | (
        { __typename?: 'DefaultVideo' }
        & { ' $fragmentRefs'?: { 'IContentData_DefaultVideo_Fragment': IContentData_DefaultVideo_Fragment } }
      ) | (
        { __typename?: 'Dictionary' }
        & { ' $fragmentRefs'?: { 'IContentData_Dictionary_Fragment': IContentData_Dictionary_Fragment } }
      ) | (
        { __typename?: 'DictionaryItem' }
        & { ' $fragmentRefs'?: { 'IContentData_DictionaryItem_Fragment': IContentData_DictionaryItem_Fragment } }
      ) | (
        { __typename?: 'FoodSuggestionItem' }
        & { ' $fragmentRefs'?: { 'IContentData_FoodSuggestionItem_Fragment': IContentData_FoodSuggestionItem_Fragment } }
      ) | (
        { __typename?: 'FoodSuggestionItemBlock' }
        & { ' $fragmentRefs'?: { 'IContentData_FoodSuggestionItemBlock_Fragment': IContentData_FoodSuggestionItemBlock_Fragment } }
      ) | (
        { __typename?: 'GenericMedia' }
        & { ' $fragmentRefs'?: { 'IContentData_GenericMedia_Fragment': IContentData_GenericMedia_Fragment } }
      ) | (
        { __typename?: 'HeaderBlock' }
        & { ' $fragmentRefs'?: { 'IContentData_HeaderBlock_Fragment': IContentData_HeaderBlock_Fragment } }
      ) | (
        { __typename?: 'HeadingElement' }
        & { ' $fragmentRefs'?: { 'IContentData_HeadingElement_Fragment': IContentData_HeadingElement_Fragment } }
      ) | (
        { __typename?: 'Image' }
        & { ' $fragmentRefs'?: { 'IContentData_Image_Fragment': IContentData_Image_Fragment } }
      ) | (
        { __typename?: 'ImageElement' }
        & { ' $fragmentRefs'?: { 'IContentData_ImageElement_Fragment': IContentData_ImageElement_Fragment } }
      ) | (
        { __typename?: 'ImageMedia' }
        & { ' $fragmentRefs'?: { 'IContentData_ImageMedia_Fragment': IContentData_ImageMedia_Fragment } }
      ) | (
        { __typename?: 'MegaMenuGroupBlock' }
        & { ' $fragmentRefs'?: { 'IContentData_MegaMenuGroupBlock_Fragment': IContentData_MegaMenuGroupBlock_Fragment;'MegaMenuGroupBlockDataFragment': MegaMenuGroupBlockDataFragment } }
      ) | (
        { __typename?: 'NavigationMenuBlock' }
        & { ' $fragmentRefs'?: { 'IContentData_NavigationMenuBlock_Fragment': IContentData_NavigationMenuBlock_Fragment } }
      ) | (
        { __typename?: 'NewDemopage' }
        & { ' $fragmentRefs'?: { 'IContentData_NewDemopage_Fragment': IContentData_NewDemopage_Fragment } }
      ) | (
        { __typename?: 'OfficeLocation' }
        & { ' $fragmentRefs'?: { 'IContentData_OfficeLocation_Fragment': IContentData_OfficeLocation_Fragment } }
      ) | (
        { __typename?: 'PageSeoSettings' }
        & { ' $fragmentRefs'?: { 'IContentData_PageSeoSettings_Fragment': IContentData_PageSeoSettings_Fragment } }
      ) | (
        { __typename?: 'PagecreatedforSaaSEvaluation' }
        & { ' $fragmentRefs'?: { 'IContentData_PagecreatedforSaaSEvaluation_Fragment': IContentData_PagecreatedforSaaSEvaluation_Fragment } }
      ) | (
        { __typename?: 'ParagraphElement' }
        & { ' $fragmentRefs'?: { 'IContentData_ParagraphElement_Fragment': IContentData_ParagraphElement_Fragment } }
      ) | (
        { __typename?: 'SearchPage' }
        & { ' $fragmentRefs'?: { 'IContentData_SearchPage_Fragment': IContentData_SearchPage_Fragment } }
      ) | (
        { __typename?: 'SysContentFolder' }
        & { ' $fragmentRefs'?: { 'IContentData_SysContentFolder_Fragment': IContentData_SysContentFolder_Fragment } }
      ) | (
        { __typename?: 'TestContent' }
        & { ' $fragmentRefs'?: { 'IContentData_TestContent_Fragment': IContentData_TestContent_Fragment } }
      ) | (
        { __typename?: 'TestimonialElement' }
        & { ' $fragmentRefs'?: { 'IContentData_TestimonialElement_Fragment': IContentData_TestimonialElement_Fragment } }
      ) | (
        { __typename?: 'Video' }
        & { ' $fragmentRefs'?: { 'IContentData_Video_Fragment': IContentData_Video_Fragment } }
      ) | (
        { __typename?: 'VideoMedia' }
        & { ' $fragmentRefs'?: { 'IContentData_VideoMedia_Fragment': IContentData_VideoMedia_Fragment } }
      ) | (
        { __typename?: 'WebsiteFooter' }
        & { ' $fragmentRefs'?: { 'IContentData_WebsiteFooter_Fragment': IContentData_WebsiteFooter_Fragment } }
      ) | (
        { __typename?: '_Component' }
        & { ' $fragmentRefs'?: { 'IContentData__Component_Fragment': IContentData__Component_Fragment } }
      ) | (
        { __typename?: '_Content' }
        & { ' $fragmentRefs'?: { 'IContentData__Content_Fragment': IContentData__Content_Fragment } }
      ) | (
        { __typename?: '_Element' }
        & { ' $fragmentRefs'?: { 'IContentData__Element_Fragment': IContentData__Element_Fragment } }
      ) | (
        { __typename?: '_Experience' }
        & { ' $fragmentRefs'?: { 'IContentData__Experience_Fragment': IContentData__Experience_Fragment } }
      ) | (
        { __typename?: '_Folder' }
        & { ' $fragmentRefs'?: { 'IContentData__Folder_Fragment': IContentData__Folder_Fragment } }
      ) | (
        { __typename?: '_Image' }
        & { ' $fragmentRefs'?: { 'IContentData__Image_Fragment': IContentData__Image_Fragment } }
      ) | (
        { __typename?: '_Media' }
        & { ' $fragmentRefs'?: { 'IContentData__Media_Fragment': IContentData__Media_Fragment } }
      ) | (
        { __typename?: '_Page' }
        & { ' $fragmentRefs'?: { 'IContentData__Page_Fragment': IContentData__Page_Fragment } }
      ) | (
        { __typename?: '_Section' }
        & { ' $fragmentRefs'?: { 'IContentData__Section_Fragment': IContentData__Section_Fragment } }
      ) | (
        { __typename?: '_Video' }
        & { ' $fragmentRefs'?: { 'IContentData__Video_Fragment': IContentData__Video_Fragment } }
      ) | (
        { __typename?: 'hero' }
        & { ' $fragmentRefs'?: { 'IContentData_hero_Fragment': IContentData_hero_Fragment } }
      ) | (
        { __typename?: 'hero2' }
        & { ' $fragmentRefs'?: { 'IContentData_hero2_Fragment': IContentData_hero2_Fragment } }
      ) | (
        { __typename?: 'hero3' }
        & { ' $fragmentRefs'?: { 'IContentData_hero3_Fragment': IContentData_hero3_Fragment } }
      ) | (
        { __typename?: 'hero4' }
        & { ' $fragmentRefs'?: { 'IContentData_hero4_Fragment': IContentData_hero4_Fragment } }
      ) | (
        { __typename?: 'heroBanner' }
        & { ' $fragmentRefs'?: { 'IContentData_heroBanner_Fragment': IContentData_heroBanner_Fragment } }
      ) | (
        { __typename?: 'heroBanner2' }
        & { ' $fragmentRefs'?: { 'IContentData_heroBanner2_Fragment': IContentData_heroBanner2_Fragment } }
      ) | (
        { __typename?: 'heroBanner3' }
        & { ' $fragmentRefs'?: { 'IContentData_heroBanner3_Fragment': IContentData_heroBanner3_Fragment } }
      ) | (
        { __typename?: 'heroBanner4' }
        & { ' $fragmentRefs'?: { 'IContentData_heroBanner4_Fragment': IContentData_heroBanner4_Fragment } }
      ) | (
        { __typename?: 'heroBanner5' }
        & { ' $fragmentRefs'?: { 'IContentData_heroBanner5_Fragment': IContentData_heroBanner5_Fragment } }
      ) | (
        { __typename?: 'heroBanner6' }
        & { ' $fragmentRefs'?: { 'IContentData_heroBanner6_Fragment': IContentData_heroBanner6_Fragment } }
      ) | (
        { __typename?: 'necComponent' }
        & { ' $fragmentRefs'?: { 'IContentData_necComponent_Fragment': IContentData_necComponent_Fragment } }
      ) | (
        { __typename?: 'newEelem' }
        & { ' $fragmentRefs'?: { 'IContentData_newEelem_Fragment': IContentData_newEelem_Fragment } }
      ) | null> | null, utilityNavigation?: Array<(
        { __typename?: 'AIFreePrompt' }
        & { ' $fragmentRefs'?: { 'IContentData_AIFreePrompt_Fragment': IContentData_AIFreePrompt_Fragment } }
      ) | (
        { __typename?: 'AIPersonalizedPrompt' }
        & { ' $fragmentRefs'?: { 'IContentData_AIPersonalizedPrompt_Fragment': IContentData_AIPersonalizedPrompt_Fragment } }
      ) | (
        { __typename?: 'AnotherSearch' }
        & { ' $fragmentRefs'?: { 'IContentData_AnotherSearch_Fragment': IContentData_AnotherSearch_Fragment } }
      ) | (
        { __typename?: 'ArticleGroupPage' }
        & { ' $fragmentRefs'?: { 'IContentData_ArticleGroupPage_Fragment': IContentData_ArticleGroupPage_Fragment } }
      ) | (
        { __typename?: 'ArticleListElement' }
        & { ' $fragmentRefs'?: { 'IContentData_ArticleListElement_Fragment': IContentData_ArticleListElement_Fragment } }
      ) | (
        { __typename?: 'ArticlePage' }
        & { ' $fragmentRefs'?: { 'IContentData_ArticlePage_Fragment': IContentData_ArticlePage_Fragment } }
      ) | (
        { __typename?: 'BannerBlock' }
        & { ' $fragmentRefs'?: { 'IContentData_BannerBlock_Fragment': IContentData_BannerBlock_Fragment } }
      ) | (
        { __typename?: 'BlankExperience' }
        & { ' $fragmentRefs'?: { 'IContentData_BlankExperience_Fragment': IContentData_BlankExperience_Fragment } }
      ) | (
        { __typename?: 'BlankSection' }
        & { ' $fragmentRefs'?: { 'IContentData_BlankSection_Fragment': IContentData_BlankSection_Fragment } }
      ) | (
        { __typename?: 'BlockTest' }
        & { ' $fragmentRefs'?: { 'IContentData_BlockTest_Fragment': IContentData_BlockTest_Fragment } }
      ) | (
        { __typename?: 'ButtonBlock' }
        & { ' $fragmentRefs'?: { 'IContentData_ButtonBlock_Fragment': IContentData_ButtonBlock_Fragment;'ButtonBlockDataFragment': ButtonBlockDataFragment } }
      ) | (
        { __typename?: 'CTAElement' }
        & { ' $fragmentRefs'?: { 'IContentData_CTAElement_Fragment': IContentData_CTAElement_Fragment } }
      ) | (
        { __typename?: 'CardBlock' }
        & { ' $fragmentRefs'?: { 'IContentData_CardBlock_Fragment': IContentData_CardBlock_Fragment } }
      ) | (
        { __typename?: 'DefaultImage' }
        & { ' $fragmentRefs'?: { 'IContentData_DefaultImage_Fragment': IContentData_DefaultImage_Fragment } }
      ) | (
        { __typename?: 'DefaultVideo' }
        & { ' $fragmentRefs'?: { 'IContentData_DefaultVideo_Fragment': IContentData_DefaultVideo_Fragment } }
      ) | (
        { __typename?: 'Dictionary' }
        & { ' $fragmentRefs'?: { 'IContentData_Dictionary_Fragment': IContentData_Dictionary_Fragment } }
      ) | (
        { __typename?: 'DictionaryItem' }
        & { ' $fragmentRefs'?: { 'IContentData_DictionaryItem_Fragment': IContentData_DictionaryItem_Fragment } }
      ) | (
        { __typename?: 'FoodSuggestionItem' }
        & { ' $fragmentRefs'?: { 'IContentData_FoodSuggestionItem_Fragment': IContentData_FoodSuggestionItem_Fragment } }
      ) | (
        { __typename?: 'FoodSuggestionItemBlock' }
        & { ' $fragmentRefs'?: { 'IContentData_FoodSuggestionItemBlock_Fragment': IContentData_FoodSuggestionItemBlock_Fragment } }
      ) | (
        { __typename?: 'GenericMedia' }
        & { ' $fragmentRefs'?: { 'IContentData_GenericMedia_Fragment': IContentData_GenericMedia_Fragment } }
      ) | (
        { __typename?: 'HeaderBlock' }
        & { ' $fragmentRefs'?: { 'IContentData_HeaderBlock_Fragment': IContentData_HeaderBlock_Fragment } }
      ) | (
        { __typename?: 'HeadingElement' }
        & { ' $fragmentRefs'?: { 'IContentData_HeadingElement_Fragment': IContentData_HeadingElement_Fragment } }
      ) | (
        { __typename?: 'Image' }
        & { ' $fragmentRefs'?: { 'IContentData_Image_Fragment': IContentData_Image_Fragment } }
      ) | (
        { __typename?: 'ImageElement' }
        & { ' $fragmentRefs'?: { 'IContentData_ImageElement_Fragment': IContentData_ImageElement_Fragment } }
      ) | (
        { __typename?: 'ImageMedia' }
        & { ' $fragmentRefs'?: { 'IContentData_ImageMedia_Fragment': IContentData_ImageMedia_Fragment } }
      ) | (
        { __typename?: 'MegaMenuGroupBlock' }
        & { ' $fragmentRefs'?: { 'IContentData_MegaMenuGroupBlock_Fragment': IContentData_MegaMenuGroupBlock_Fragment } }
      ) | (
        { __typename?: 'NavigationMenuBlock' }
        & { ' $fragmentRefs'?: { 'IContentData_NavigationMenuBlock_Fragment': IContentData_NavigationMenuBlock_Fragment } }
      ) | (
        { __typename?: 'NewDemopage' }
        & { ' $fragmentRefs'?: { 'IContentData_NewDemopage_Fragment': IContentData_NewDemopage_Fragment } }
      ) | (
        { __typename?: 'OfficeLocation' }
        & { ' $fragmentRefs'?: { 'IContentData_OfficeLocation_Fragment': IContentData_OfficeLocation_Fragment } }
      ) | (
        { __typename?: 'PageSeoSettings' }
        & { ' $fragmentRefs'?: { 'IContentData_PageSeoSettings_Fragment': IContentData_PageSeoSettings_Fragment } }
      ) | (
        { __typename?: 'PagecreatedforSaaSEvaluation' }
        & { ' $fragmentRefs'?: { 'IContentData_PagecreatedforSaaSEvaluation_Fragment': IContentData_PagecreatedforSaaSEvaluation_Fragment } }
      ) | (
        { __typename?: 'ParagraphElement' }
        & { ' $fragmentRefs'?: { 'IContentData_ParagraphElement_Fragment': IContentData_ParagraphElement_Fragment } }
      ) | (
        { __typename?: 'SearchPage' }
        & { ' $fragmentRefs'?: { 'IContentData_SearchPage_Fragment': IContentData_SearchPage_Fragment } }
      ) | (
        { __typename?: 'SysContentFolder' }
        & { ' $fragmentRefs'?: { 'IContentData_SysContentFolder_Fragment': IContentData_SysContentFolder_Fragment } }
      ) | (
        { __typename?: 'TestContent' }
        & { ' $fragmentRefs'?: { 'IContentData_TestContent_Fragment': IContentData_TestContent_Fragment } }
      ) | (
        { __typename?: 'TestimonialElement' }
        & { ' $fragmentRefs'?: { 'IContentData_TestimonialElement_Fragment': IContentData_TestimonialElement_Fragment } }
      ) | (
        { __typename?: 'Video' }
        & { ' $fragmentRefs'?: { 'IContentData_Video_Fragment': IContentData_Video_Fragment } }
      ) | (
        { __typename?: 'VideoMedia' }
        & { ' $fragmentRefs'?: { 'IContentData_VideoMedia_Fragment': IContentData_VideoMedia_Fragment } }
      ) | (
        { __typename?: 'WebsiteFooter' }
        & { ' $fragmentRefs'?: { 'IContentData_WebsiteFooter_Fragment': IContentData_WebsiteFooter_Fragment } }
      ) | (
        { __typename?: '_Component' }
        & { ' $fragmentRefs'?: { 'IContentData__Component_Fragment': IContentData__Component_Fragment } }
      ) | (
        { __typename?: '_Content' }
        & { ' $fragmentRefs'?: { 'IContentData__Content_Fragment': IContentData__Content_Fragment } }
      ) | (
        { __typename?: '_Element' }
        & { ' $fragmentRefs'?: { 'IContentData__Element_Fragment': IContentData__Element_Fragment } }
      ) | (
        { __typename?: '_Experience' }
        & { ' $fragmentRefs'?: { 'IContentData__Experience_Fragment': IContentData__Experience_Fragment } }
      ) | (
        { __typename?: '_Folder' }
        & { ' $fragmentRefs'?: { 'IContentData__Folder_Fragment': IContentData__Folder_Fragment } }
      ) | (
        { __typename?: '_Image' }
        & { ' $fragmentRefs'?: { 'IContentData__Image_Fragment': IContentData__Image_Fragment } }
      ) | (
        { __typename?: '_Media' }
        & { ' $fragmentRefs'?: { 'IContentData__Media_Fragment': IContentData__Media_Fragment } }
      ) | (
        { __typename?: '_Page' }
        & { ' $fragmentRefs'?: { 'IContentData__Page_Fragment': IContentData__Page_Fragment } }
      ) | (
        { __typename?: '_Section' }
        & { ' $fragmentRefs'?: { 'IContentData__Section_Fragment': IContentData__Section_Fragment } }
      ) | (
        { __typename?: '_Video' }
        & { ' $fragmentRefs'?: { 'IContentData__Video_Fragment': IContentData__Video_Fragment } }
      ) | (
        { __typename?: 'hero' }
        & { ' $fragmentRefs'?: { 'IContentData_hero_Fragment': IContentData_hero_Fragment } }
      ) | (
        { __typename?: 'hero2' }
        & { ' $fragmentRefs'?: { 'IContentData_hero2_Fragment': IContentData_hero2_Fragment } }
      ) | (
        { __typename?: 'hero3' }
        & { ' $fragmentRefs'?: { 'IContentData_hero3_Fragment': IContentData_hero3_Fragment } }
      ) | (
        { __typename?: 'hero4' }
        & { ' $fragmentRefs'?: { 'IContentData_hero4_Fragment': IContentData_hero4_Fragment } }
      ) | (
        { __typename?: 'heroBanner' }
        & { ' $fragmentRefs'?: { 'IContentData_heroBanner_Fragment': IContentData_heroBanner_Fragment } }
      ) | (
        { __typename?: 'heroBanner2' }
        & { ' $fragmentRefs'?: { 'IContentData_heroBanner2_Fragment': IContentData_heroBanner2_Fragment } }
      ) | (
        { __typename?: 'heroBanner3' }
        & { ' $fragmentRefs'?: { 'IContentData_heroBanner3_Fragment': IContentData_heroBanner3_Fragment } }
      ) | (
        { __typename?: 'heroBanner4' }
        & { ' $fragmentRefs'?: { 'IContentData_heroBanner4_Fragment': IContentData_heroBanner4_Fragment } }
      ) | (
        { __typename?: 'heroBanner5' }
        & { ' $fragmentRefs'?: { 'IContentData_heroBanner5_Fragment': IContentData_heroBanner5_Fragment } }
      ) | (
        { __typename?: 'heroBanner6' }
        & { ' $fragmentRefs'?: { 'IContentData_heroBanner6_Fragment': IContentData_heroBanner6_Fragment } }
      ) | (
        { __typename?: 'necComponent' }
        & { ' $fragmentRefs'?: { 'IContentData_necComponent_Fragment': IContentData_necComponent_Fragment } }
      ) | (
        { __typename?: 'newEelem' }
        & { ' $fragmentRefs'?: { 'IContentData_newEelem_Fragment': IContentData_newEelem_Fragment } }
      ) | null> | null } | null> | null } | null };

export type MegaMenuGroupBlockDataFragment = { __typename?: 'MegaMenuGroupBlock', menuName?: string | null, menuLink?: (
    { __typename?: 'ContentUrl' }
    & { ' $fragmentRefs'?: { 'LinkDataFragment': LinkDataFragment } }
  ) | null, menuData?: Array<(
    { __typename: 'AIFreePrompt' }
    & { ' $fragmentRefs'?: { 'IContentData_AIFreePrompt_Fragment': IContentData_AIFreePrompt_Fragment } }
  ) | (
    { __typename: 'AIPersonalizedPrompt' }
    & { ' $fragmentRefs'?: { 'IContentData_AIPersonalizedPrompt_Fragment': IContentData_AIPersonalizedPrompt_Fragment } }
  ) | (
    { __typename: 'AnotherSearch' }
    & { ' $fragmentRefs'?: { 'IContentData_AnotherSearch_Fragment': IContentData_AnotherSearch_Fragment } }
  ) | (
    { __typename: 'ArticleGroupPage' }
    & { ' $fragmentRefs'?: { 'IContentData_ArticleGroupPage_Fragment': IContentData_ArticleGroupPage_Fragment } }
  ) | (
    { __typename: 'ArticleListElement' }
    & { ' $fragmentRefs'?: { 'IContentData_ArticleListElement_Fragment': IContentData_ArticleListElement_Fragment } }
  ) | (
    { __typename: 'ArticlePage' }
    & { ' $fragmentRefs'?: { 'IContentData_ArticlePage_Fragment': IContentData_ArticlePage_Fragment } }
  ) | (
    { __typename: 'BannerBlock' }
    & { ' $fragmentRefs'?: { 'IContentData_BannerBlock_Fragment': IContentData_BannerBlock_Fragment } }
  ) | (
    { __typename: 'BlankExperience' }
    & { ' $fragmentRefs'?: { 'IContentData_BlankExperience_Fragment': IContentData_BlankExperience_Fragment } }
  ) | (
    { __typename: 'BlankSection' }
    & { ' $fragmentRefs'?: { 'IContentData_BlankSection_Fragment': IContentData_BlankSection_Fragment } }
  ) | (
    { __typename: 'BlockTest' }
    & { ' $fragmentRefs'?: { 'IContentData_BlockTest_Fragment': IContentData_BlockTest_Fragment } }
  ) | (
    { __typename: 'ButtonBlock' }
    & { ' $fragmentRefs'?: { 'IContentData_ButtonBlock_Fragment': IContentData_ButtonBlock_Fragment } }
  ) | (
    { __typename: 'CTAElement' }
    & { ' $fragmentRefs'?: { 'IContentData_CTAElement_Fragment': IContentData_CTAElement_Fragment } }
  ) | (
    { __typename: 'CardBlock' }
    & { ' $fragmentRefs'?: { 'IContentData_CardBlock_Fragment': IContentData_CardBlock_Fragment;'CardBlockDataFragment': CardBlockDataFragment } }
  ) | (
    { __typename: 'DefaultImage' }
    & { ' $fragmentRefs'?: { 'IContentData_DefaultImage_Fragment': IContentData_DefaultImage_Fragment } }
  ) | (
    { __typename: 'DefaultVideo' }
    & { ' $fragmentRefs'?: { 'IContentData_DefaultVideo_Fragment': IContentData_DefaultVideo_Fragment } }
  ) | (
    { __typename: 'Dictionary' }
    & { ' $fragmentRefs'?: { 'IContentData_Dictionary_Fragment': IContentData_Dictionary_Fragment } }
  ) | (
    { __typename: 'DictionaryItem' }
    & { ' $fragmentRefs'?: { 'IContentData_DictionaryItem_Fragment': IContentData_DictionaryItem_Fragment } }
  ) | (
    { __typename: 'FoodSuggestionItem' }
    & { ' $fragmentRefs'?: { 'IContentData_FoodSuggestionItem_Fragment': IContentData_FoodSuggestionItem_Fragment } }
  ) | (
    { __typename: 'FoodSuggestionItemBlock' }
    & { ' $fragmentRefs'?: { 'IContentData_FoodSuggestionItemBlock_Fragment': IContentData_FoodSuggestionItemBlock_Fragment } }
  ) | (
    { __typename: 'GenericMedia' }
    & { ' $fragmentRefs'?: { 'IContentData_GenericMedia_Fragment': IContentData_GenericMedia_Fragment } }
  ) | (
    { __typename: 'HeaderBlock' }
    & { ' $fragmentRefs'?: { 'IContentData_HeaderBlock_Fragment': IContentData_HeaderBlock_Fragment } }
  ) | (
    { __typename: 'HeadingElement' }
    & { ' $fragmentRefs'?: { 'IContentData_HeadingElement_Fragment': IContentData_HeadingElement_Fragment } }
  ) | (
    { __typename: 'Image' }
    & { ' $fragmentRefs'?: { 'IContentData_Image_Fragment': IContentData_Image_Fragment } }
  ) | (
    { __typename: 'ImageElement' }
    & { ' $fragmentRefs'?: { 'IContentData_ImageElement_Fragment': IContentData_ImageElement_Fragment } }
  ) | (
    { __typename: 'ImageMedia' }
    & { ' $fragmentRefs'?: { 'IContentData_ImageMedia_Fragment': IContentData_ImageMedia_Fragment } }
  ) | (
    { __typename: 'MegaMenuGroupBlock' }
    & { ' $fragmentRefs'?: { 'IContentData_MegaMenuGroupBlock_Fragment': IContentData_MegaMenuGroupBlock_Fragment } }
  ) | (
    { __typename: 'NavigationMenuBlock' }
    & { ' $fragmentRefs'?: { 'IContentData_NavigationMenuBlock_Fragment': IContentData_NavigationMenuBlock_Fragment;'NavigationMenuBlockDataFragment': NavigationMenuBlockDataFragment } }
  ) | (
    { __typename: 'NewDemopage' }
    & { ' $fragmentRefs'?: { 'IContentData_NewDemopage_Fragment': IContentData_NewDemopage_Fragment } }
  ) | (
    { __typename: 'OfficeLocation' }
    & { ' $fragmentRefs'?: { 'IContentData_OfficeLocation_Fragment': IContentData_OfficeLocation_Fragment } }
  ) | (
    { __typename: 'PageSeoSettings' }
    & { ' $fragmentRefs'?: { 'IContentData_PageSeoSettings_Fragment': IContentData_PageSeoSettings_Fragment } }
  ) | (
    { __typename: 'PagecreatedforSaaSEvaluation' }
    & { ' $fragmentRefs'?: { 'IContentData_PagecreatedforSaaSEvaluation_Fragment': IContentData_PagecreatedforSaaSEvaluation_Fragment } }
  ) | (
    { __typename: 'ParagraphElement' }
    & { ' $fragmentRefs'?: { 'IContentData_ParagraphElement_Fragment': IContentData_ParagraphElement_Fragment } }
  ) | (
    { __typename: 'SearchPage' }
    & { ' $fragmentRefs'?: { 'IContentData_SearchPage_Fragment': IContentData_SearchPage_Fragment } }
  ) | (
    { __typename: 'SysContentFolder' }
    & { ' $fragmentRefs'?: { 'IContentData_SysContentFolder_Fragment': IContentData_SysContentFolder_Fragment } }
  ) | (
    { __typename: 'TestContent' }
    & { ' $fragmentRefs'?: { 'IContentData_TestContent_Fragment': IContentData_TestContent_Fragment } }
  ) | (
    { __typename: 'TestimonialElement' }
    & { ' $fragmentRefs'?: { 'IContentData_TestimonialElement_Fragment': IContentData_TestimonialElement_Fragment } }
  ) | (
    { __typename: 'Video' }
    & { ' $fragmentRefs'?: { 'IContentData_Video_Fragment': IContentData_Video_Fragment } }
  ) | (
    { __typename: 'VideoMedia' }
    & { ' $fragmentRefs'?: { 'IContentData_VideoMedia_Fragment': IContentData_VideoMedia_Fragment } }
  ) | (
    { __typename: 'WebsiteFooter' }
    & { ' $fragmentRefs'?: { 'IContentData_WebsiteFooter_Fragment': IContentData_WebsiteFooter_Fragment } }
  ) | (
    { __typename: '_Component' }
    & { ' $fragmentRefs'?: { 'IContentData__Component_Fragment': IContentData__Component_Fragment } }
  ) | (
    { __typename: '_Content' }
    & { ' $fragmentRefs'?: { 'IContentData__Content_Fragment': IContentData__Content_Fragment } }
  ) | (
    { __typename: '_Element' }
    & { ' $fragmentRefs'?: { 'IContentData__Element_Fragment': IContentData__Element_Fragment } }
  ) | (
    { __typename: '_Experience' }
    & { ' $fragmentRefs'?: { 'IContentData__Experience_Fragment': IContentData__Experience_Fragment } }
  ) | (
    { __typename: '_Folder' }
    & { ' $fragmentRefs'?: { 'IContentData__Folder_Fragment': IContentData__Folder_Fragment } }
  ) | (
    { __typename: '_Image' }
    & { ' $fragmentRefs'?: { 'IContentData__Image_Fragment': IContentData__Image_Fragment } }
  ) | (
    { __typename: '_Media' }
    & { ' $fragmentRefs'?: { 'IContentData__Media_Fragment': IContentData__Media_Fragment } }
  ) | (
    { __typename: '_Page' }
    & { ' $fragmentRefs'?: { 'IContentData__Page_Fragment': IContentData__Page_Fragment } }
  ) | (
    { __typename: '_Section' }
    & { ' $fragmentRefs'?: { 'IContentData__Section_Fragment': IContentData__Section_Fragment } }
  ) | (
    { __typename: '_Video' }
    & { ' $fragmentRefs'?: { 'IContentData__Video_Fragment': IContentData__Video_Fragment } }
  ) | (
    { __typename: 'hero' }
    & { ' $fragmentRefs'?: { 'IContentData_hero_Fragment': IContentData_hero_Fragment } }
  ) | (
    { __typename: 'hero2' }
    & { ' $fragmentRefs'?: { 'IContentData_hero2_Fragment': IContentData_hero2_Fragment } }
  ) | (
    { __typename: 'hero3' }
    & { ' $fragmentRefs'?: { 'IContentData_hero3_Fragment': IContentData_hero3_Fragment } }
  ) | (
    { __typename: 'hero4' }
    & { ' $fragmentRefs'?: { 'IContentData_hero4_Fragment': IContentData_hero4_Fragment } }
  ) | (
    { __typename: 'heroBanner' }
    & { ' $fragmentRefs'?: { 'IContentData_heroBanner_Fragment': IContentData_heroBanner_Fragment } }
  ) | (
    { __typename: 'heroBanner2' }
    & { ' $fragmentRefs'?: { 'IContentData_heroBanner2_Fragment': IContentData_heroBanner2_Fragment } }
  ) | (
    { __typename: 'heroBanner3' }
    & { ' $fragmentRefs'?: { 'IContentData_heroBanner3_Fragment': IContentData_heroBanner3_Fragment } }
  ) | (
    { __typename: 'heroBanner4' }
    & { ' $fragmentRefs'?: { 'IContentData_heroBanner4_Fragment': IContentData_heroBanner4_Fragment } }
  ) | (
    { __typename: 'heroBanner5' }
    & { ' $fragmentRefs'?: { 'IContentData_heroBanner5_Fragment': IContentData_heroBanner5_Fragment } }
  ) | (
    { __typename: 'heroBanner6' }
    & { ' $fragmentRefs'?: { 'IContentData_heroBanner6_Fragment': IContentData_heroBanner6_Fragment } }
  ) | (
    { __typename: 'necComponent' }
    & { ' $fragmentRefs'?: { 'IContentData_necComponent_Fragment': IContentData_necComponent_Fragment } }
  ) | (
    { __typename: 'newEelem' }
    & { ' $fragmentRefs'?: { 'IContentData_newEelem_Fragment': IContentData_newEelem_Fragment } }
  ) | null> | null } & { ' $fragmentName'?: 'MegaMenuGroupBlockDataFragment' };

export type NavigationMenuBlockDataFragment = { __typename?: 'NavigationMenuBlock', title?: string | null, items?: Array<(
    { __typename?: 'Link' }
    & { ' $fragmentRefs'?: { 'LinkItemDataFragment': LinkItemDataFragment } }
  ) | null> | null } & { ' $fragmentName'?: 'NavigationMenuBlockDataFragment' };

export type getDictionaryQueryVariables = Exact<{
  dictionary: Scalars['String']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
}>;


export type getDictionaryQuery = { __typename?: 'Query', getDictionary?: { __typename?: 'DictionaryOutput', total?: number | null, items?: Array<{ __typename?: 'Dictionary', key?: string | null, contents?: Array<{ __typename?: 'DictionaryItemProperty', key?: string | null, value?: string | null } | null> | null } | null> | null } | null };

type IContentListItem_AIFreePrompt_Fragment = (
  { __typename?: 'AIFreePrompt' }
  & { ' $fragmentRefs'?: { 'IContentData_AIFreePrompt_Fragment': IContentData_AIFreePrompt_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_AIFreePrompt_Fragment' };

type IContentListItem_AIPersonalizedPrompt_Fragment = (
  { __typename?: 'AIPersonalizedPrompt' }
  & { ' $fragmentRefs'?: { 'IContentData_AIPersonalizedPrompt_Fragment': IContentData_AIPersonalizedPrompt_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_AIPersonalizedPrompt_Fragment' };

type IContentListItem_AnotherSearch_Fragment = (
  { __typename?: 'AnotherSearch' }
  & { ' $fragmentRefs'?: { 'IContentData_AnotherSearch_Fragment': IContentData_AnotherSearch_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_AnotherSearch_Fragment' };

type IContentListItem_ArticleGroupPage_Fragment = (
  { __typename?: 'ArticleGroupPage' }
  & { ' $fragmentRefs'?: { 'IContentData_ArticleGroupPage_Fragment': IContentData_ArticleGroupPage_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_ArticleGroupPage_Fragment' };

type IContentListItem_ArticleListElement_Fragment = (
  { __typename?: 'ArticleListElement' }
  & { ' $fragmentRefs'?: { 'IContentData_ArticleListElement_Fragment': IContentData_ArticleListElement_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_ArticleListElement_Fragment' };

type IContentListItem_ArticlePage_Fragment = (
  { __typename?: 'ArticlePage' }
  & { ' $fragmentRefs'?: { 'IContentData_ArticlePage_Fragment': IContentData_ArticlePage_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_ArticlePage_Fragment' };

type IContentListItem_BannerBlock_Fragment = (
  { __typename?: 'BannerBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_BannerBlock_Fragment': IContentData_BannerBlock_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_BannerBlock_Fragment' };

type IContentListItem_BlankExperience_Fragment = (
  { __typename?: 'BlankExperience' }
  & { ' $fragmentRefs'?: { 'IContentData_BlankExperience_Fragment': IContentData_BlankExperience_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_BlankExperience_Fragment' };

type IContentListItem_BlankSection_Fragment = (
  { __typename?: 'BlankSection' }
  & { ' $fragmentRefs'?: { 'IContentData_BlankSection_Fragment': IContentData_BlankSection_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_BlankSection_Fragment' };

type IContentListItem_BlockTest_Fragment = (
  { __typename?: 'BlockTest' }
  & { ' $fragmentRefs'?: { 'IContentData_BlockTest_Fragment': IContentData_BlockTest_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_BlockTest_Fragment' };

type IContentListItem_ButtonBlock_Fragment = (
  { __typename?: 'ButtonBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_ButtonBlock_Fragment': IContentData_ButtonBlock_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_ButtonBlock_Fragment' };

type IContentListItem_CTAElement_Fragment = (
  { __typename?: 'CTAElement' }
  & { ' $fragmentRefs'?: { 'IContentData_CTAElement_Fragment': IContentData_CTAElement_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_CTAElement_Fragment' };

type IContentListItem_CardBlock_Fragment = (
  { __typename?: 'CardBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_CardBlock_Fragment': IContentData_CardBlock_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_CardBlock_Fragment' };

type IContentListItem_DefaultImage_Fragment = (
  { __typename?: 'DefaultImage' }
  & { ' $fragmentRefs'?: { 'IContentData_DefaultImage_Fragment': IContentData_DefaultImage_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_DefaultImage_Fragment' };

type IContentListItem_DefaultVideo_Fragment = (
  { __typename?: 'DefaultVideo' }
  & { ' $fragmentRefs'?: { 'IContentData_DefaultVideo_Fragment': IContentData_DefaultVideo_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_DefaultVideo_Fragment' };

type IContentListItem_Dictionary_Fragment = (
  { __typename?: 'Dictionary' }
  & { ' $fragmentRefs'?: { 'IContentData_Dictionary_Fragment': IContentData_Dictionary_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_Dictionary_Fragment' };

type IContentListItem_DictionaryItem_Fragment = (
  { __typename?: 'DictionaryItem' }
  & { ' $fragmentRefs'?: { 'IContentData_DictionaryItem_Fragment': IContentData_DictionaryItem_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_DictionaryItem_Fragment' };

type IContentListItem_FoodSuggestionItem_Fragment = (
  { __typename?: 'FoodSuggestionItem' }
  & { ' $fragmentRefs'?: { 'IContentData_FoodSuggestionItem_Fragment': IContentData_FoodSuggestionItem_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_FoodSuggestionItem_Fragment' };

type IContentListItem_FoodSuggestionItemBlock_Fragment = (
  { __typename?: 'FoodSuggestionItemBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_FoodSuggestionItemBlock_Fragment': IContentData_FoodSuggestionItemBlock_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_FoodSuggestionItemBlock_Fragment' };

type IContentListItem_GenericMedia_Fragment = (
  { __typename?: 'GenericMedia' }
  & { ' $fragmentRefs'?: { 'IContentData_GenericMedia_Fragment': IContentData_GenericMedia_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_GenericMedia_Fragment' };

type IContentListItem_HeaderBlock_Fragment = (
  { __typename?: 'HeaderBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_HeaderBlock_Fragment': IContentData_HeaderBlock_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_HeaderBlock_Fragment' };

type IContentListItem_HeadingElement_Fragment = (
  { __typename?: 'HeadingElement' }
  & { ' $fragmentRefs'?: { 'IContentData_HeadingElement_Fragment': IContentData_HeadingElement_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_HeadingElement_Fragment' };

type IContentListItem_Image_Fragment = (
  { __typename?: 'Image' }
  & { ' $fragmentRefs'?: { 'IContentData_Image_Fragment': IContentData_Image_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_Image_Fragment' };

type IContentListItem_ImageElement_Fragment = (
  { __typename?: 'ImageElement' }
  & { ' $fragmentRefs'?: { 'IContentData_ImageElement_Fragment': IContentData_ImageElement_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_ImageElement_Fragment' };

type IContentListItem_ImageMedia_Fragment = (
  { __typename?: 'ImageMedia' }
  & { ' $fragmentRefs'?: { 'IContentData_ImageMedia_Fragment': IContentData_ImageMedia_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_ImageMedia_Fragment' };

type IContentListItem_MegaMenuGroupBlock_Fragment = (
  { __typename?: 'MegaMenuGroupBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_MegaMenuGroupBlock_Fragment': IContentData_MegaMenuGroupBlock_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_MegaMenuGroupBlock_Fragment' };

type IContentListItem_NavigationMenuBlock_Fragment = (
  { __typename?: 'NavigationMenuBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_NavigationMenuBlock_Fragment': IContentData_NavigationMenuBlock_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_NavigationMenuBlock_Fragment' };

type IContentListItem_NewDemopage_Fragment = (
  { __typename?: 'NewDemopage' }
  & { ' $fragmentRefs'?: { 'IContentData_NewDemopage_Fragment': IContentData_NewDemopage_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_NewDemopage_Fragment' };

type IContentListItem_OfficeLocation_Fragment = (
  { __typename?: 'OfficeLocation' }
  & { ' $fragmentRefs'?: { 'IContentData_OfficeLocation_Fragment': IContentData_OfficeLocation_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_OfficeLocation_Fragment' };

type IContentListItem_PageSeoSettings_Fragment = (
  { __typename?: 'PageSeoSettings' }
  & { ' $fragmentRefs'?: { 'IContentData_PageSeoSettings_Fragment': IContentData_PageSeoSettings_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_PageSeoSettings_Fragment' };

type IContentListItem_PagecreatedforSaaSEvaluation_Fragment = (
  { __typename?: 'PagecreatedforSaaSEvaluation' }
  & { ' $fragmentRefs'?: { 'IContentData_PagecreatedforSaaSEvaluation_Fragment': IContentData_PagecreatedforSaaSEvaluation_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_PagecreatedforSaaSEvaluation_Fragment' };

type IContentListItem_ParagraphElement_Fragment = (
  { __typename?: 'ParagraphElement' }
  & { ' $fragmentRefs'?: { 'IContentData_ParagraphElement_Fragment': IContentData_ParagraphElement_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_ParagraphElement_Fragment' };

type IContentListItem_SearchPage_Fragment = (
  { __typename?: 'SearchPage' }
  & { ' $fragmentRefs'?: { 'IContentData_SearchPage_Fragment': IContentData_SearchPage_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_SearchPage_Fragment' };

type IContentListItem_SysContentFolder_Fragment = (
  { __typename?: 'SysContentFolder' }
  & { ' $fragmentRefs'?: { 'IContentData_SysContentFolder_Fragment': IContentData_SysContentFolder_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_SysContentFolder_Fragment' };

type IContentListItem_TestContent_Fragment = (
  { __typename?: 'TestContent' }
  & { ' $fragmentRefs'?: { 'IContentData_TestContent_Fragment': IContentData_TestContent_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_TestContent_Fragment' };

type IContentListItem_TestimonialElement_Fragment = (
  { __typename?: 'TestimonialElement' }
  & { ' $fragmentRefs'?: { 'IContentData_TestimonialElement_Fragment': IContentData_TestimonialElement_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_TestimonialElement_Fragment' };

type IContentListItem_Video_Fragment = (
  { __typename?: 'Video' }
  & { ' $fragmentRefs'?: { 'IContentData_Video_Fragment': IContentData_Video_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_Video_Fragment' };

type IContentListItem_VideoMedia_Fragment = (
  { __typename?: 'VideoMedia' }
  & { ' $fragmentRefs'?: { 'IContentData_VideoMedia_Fragment': IContentData_VideoMedia_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_VideoMedia_Fragment' };

type IContentListItem_WebsiteFooter_Fragment = (
  { __typename?: 'WebsiteFooter' }
  & { ' $fragmentRefs'?: { 'IContentData_WebsiteFooter_Fragment': IContentData_WebsiteFooter_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_WebsiteFooter_Fragment' };

type IContentListItem__Component_Fragment = (
  { __typename?: '_Component' }
  & { ' $fragmentRefs'?: { 'IContentData__Component_Fragment': IContentData__Component_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem__Component_Fragment' };

type IContentListItem__Content_Fragment = (
  { __typename?: '_Content' }
  & { ' $fragmentRefs'?: { 'IContentData__Content_Fragment': IContentData__Content_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem__Content_Fragment' };

type IContentListItem__Element_Fragment = (
  { __typename?: '_Element' }
  & { ' $fragmentRefs'?: { 'IContentData__Element_Fragment': IContentData__Element_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem__Element_Fragment' };

type IContentListItem__Experience_Fragment = (
  { __typename?: '_Experience' }
  & { ' $fragmentRefs'?: { 'IContentData__Experience_Fragment': IContentData__Experience_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem__Experience_Fragment' };

type IContentListItem__Folder_Fragment = (
  { __typename?: '_Folder' }
  & { ' $fragmentRefs'?: { 'IContentData__Folder_Fragment': IContentData__Folder_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem__Folder_Fragment' };

type IContentListItem__Image_Fragment = (
  { __typename?: '_Image' }
  & { ' $fragmentRefs'?: { 'IContentData__Image_Fragment': IContentData__Image_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem__Image_Fragment' };

type IContentListItem__Media_Fragment = (
  { __typename?: '_Media' }
  & { ' $fragmentRefs'?: { 'IContentData__Media_Fragment': IContentData__Media_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem__Media_Fragment' };

type IContentListItem__Page_Fragment = (
  { __typename?: '_Page' }
  & { ' $fragmentRefs'?: { 'IContentData__Page_Fragment': IContentData__Page_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem__Page_Fragment' };

type IContentListItem__Section_Fragment = (
  { __typename?: '_Section' }
  & { ' $fragmentRefs'?: { 'IContentData__Section_Fragment': IContentData__Section_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem__Section_Fragment' };

type IContentListItem__Video_Fragment = (
  { __typename?: '_Video' }
  & { ' $fragmentRefs'?: { 'IContentData__Video_Fragment': IContentData__Video_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem__Video_Fragment' };

type IContentListItem_hero_Fragment = (
  { __typename?: 'hero' }
  & { ' $fragmentRefs'?: { 'IContentData_hero_Fragment': IContentData_hero_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_hero_Fragment' };

type IContentListItem_hero2_Fragment = (
  { __typename?: 'hero2' }
  & { ' $fragmentRefs'?: { 'IContentData_hero2_Fragment': IContentData_hero2_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_hero2_Fragment' };

type IContentListItem_hero3_Fragment = (
  { __typename?: 'hero3' }
  & { ' $fragmentRefs'?: { 'IContentData_hero3_Fragment': IContentData_hero3_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_hero3_Fragment' };

type IContentListItem_hero4_Fragment = (
  { __typename?: 'hero4' }
  & { ' $fragmentRefs'?: { 'IContentData_hero4_Fragment': IContentData_hero4_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_hero4_Fragment' };

type IContentListItem_heroBanner_Fragment = (
  { __typename?: 'heroBanner' }
  & { ' $fragmentRefs'?: { 'IContentData_heroBanner_Fragment': IContentData_heroBanner_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_heroBanner_Fragment' };

type IContentListItem_heroBanner2_Fragment = (
  { __typename?: 'heroBanner2' }
  & { ' $fragmentRefs'?: { 'IContentData_heroBanner2_Fragment': IContentData_heroBanner2_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_heroBanner2_Fragment' };

type IContentListItem_heroBanner3_Fragment = (
  { __typename?: 'heroBanner3' }
  & { ' $fragmentRefs'?: { 'IContentData_heroBanner3_Fragment': IContentData_heroBanner3_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_heroBanner3_Fragment' };

type IContentListItem_heroBanner4_Fragment = (
  { __typename?: 'heroBanner4' }
  & { ' $fragmentRefs'?: { 'IContentData_heroBanner4_Fragment': IContentData_heroBanner4_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_heroBanner4_Fragment' };

type IContentListItem_heroBanner5_Fragment = (
  { __typename?: 'heroBanner5' }
  & { ' $fragmentRefs'?: { 'IContentData_heroBanner5_Fragment': IContentData_heroBanner5_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_heroBanner5_Fragment' };

type IContentListItem_heroBanner6_Fragment = (
  { __typename?: 'heroBanner6' }
  & { ' $fragmentRefs'?: { 'IContentData_heroBanner6_Fragment': IContentData_heroBanner6_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_heroBanner6_Fragment' };

type IContentListItem_necComponent_Fragment = (
  { __typename?: 'necComponent' }
  & { ' $fragmentRefs'?: { 'IContentData_necComponent_Fragment': IContentData_necComponent_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_necComponent_Fragment' };

type IContentListItem_newEelem_Fragment = (
  { __typename?: 'newEelem' }
  & { ' $fragmentRefs'?: { 'IContentData_newEelem_Fragment': IContentData_newEelem_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_newEelem_Fragment' };

export type IContentListItemFragment = IContentListItem_AIFreePrompt_Fragment | IContentListItem_AIPersonalizedPrompt_Fragment | IContentListItem_AnotherSearch_Fragment | IContentListItem_ArticleGroupPage_Fragment | IContentListItem_ArticleListElement_Fragment | IContentListItem_ArticlePage_Fragment | IContentListItem_BannerBlock_Fragment | IContentListItem_BlankExperience_Fragment | IContentListItem_BlankSection_Fragment | IContentListItem_BlockTest_Fragment | IContentListItem_ButtonBlock_Fragment | IContentListItem_CTAElement_Fragment | IContentListItem_CardBlock_Fragment | IContentListItem_DefaultImage_Fragment | IContentListItem_DefaultVideo_Fragment | IContentListItem_Dictionary_Fragment | IContentListItem_DictionaryItem_Fragment | IContentListItem_FoodSuggestionItem_Fragment | IContentListItem_FoodSuggestionItemBlock_Fragment | IContentListItem_GenericMedia_Fragment | IContentListItem_HeaderBlock_Fragment | IContentListItem_HeadingElement_Fragment | IContentListItem_Image_Fragment | IContentListItem_ImageElement_Fragment | IContentListItem_ImageMedia_Fragment | IContentListItem_MegaMenuGroupBlock_Fragment | IContentListItem_NavigationMenuBlock_Fragment | IContentListItem_NewDemopage_Fragment | IContentListItem_OfficeLocation_Fragment | IContentListItem_PageSeoSettings_Fragment | IContentListItem_PagecreatedforSaaSEvaluation_Fragment | IContentListItem_ParagraphElement_Fragment | IContentListItem_SearchPage_Fragment | IContentListItem_SysContentFolder_Fragment | IContentListItem_TestContent_Fragment | IContentListItem_TestimonialElement_Fragment | IContentListItem_Video_Fragment | IContentListItem_VideoMedia_Fragment | IContentListItem_WebsiteFooter_Fragment | IContentListItem__Component_Fragment | IContentListItem__Content_Fragment | IContentListItem__Element_Fragment | IContentListItem__Experience_Fragment | IContentListItem__Folder_Fragment | IContentListItem__Image_Fragment | IContentListItem__Media_Fragment | IContentListItem__Page_Fragment | IContentListItem__Section_Fragment | IContentListItem__Video_Fragment | IContentListItem_hero_Fragment | IContentListItem_hero2_Fragment | IContentListItem_hero3_Fragment | IContentListItem_hero4_Fragment | IContentListItem_heroBanner_Fragment | IContentListItem_heroBanner2_Fragment | IContentListItem_heroBanner3_Fragment | IContentListItem_heroBanner4_Fragment | IContentListItem_heroBanner5_Fragment | IContentListItem_heroBanner6_Fragment | IContentListItem_necComponent_Fragment | IContentListItem_newEelem_Fragment;

type PageData_AIFreePrompt_Fragment = (
  { __typename?: 'AIFreePrompt' }
  & { ' $fragmentRefs'?: { 'IContentData_AIFreePrompt_Fragment': IContentData_AIFreePrompt_Fragment } }
) & { ' $fragmentName'?: 'PageData_AIFreePrompt_Fragment' };

type PageData_AIPersonalizedPrompt_Fragment = (
  { __typename?: 'AIPersonalizedPrompt' }
  & { ' $fragmentRefs'?: { 'IContentData_AIPersonalizedPrompt_Fragment': IContentData_AIPersonalizedPrompt_Fragment } }
) & { ' $fragmentName'?: 'PageData_AIPersonalizedPrompt_Fragment' };

type PageData_AnotherSearch_Fragment = (
  { __typename?: 'AnotherSearch' }
  & { ' $fragmentRefs'?: { 'IContentData_AnotherSearch_Fragment': IContentData_AnotherSearch_Fragment } }
) & { ' $fragmentName'?: 'PageData_AnotherSearch_Fragment' };

type PageData_ArticleGroupPage_Fragment = (
  { __typename?: 'ArticleGroupPage' }
  & { ' $fragmentRefs'?: { 'IContentData_ArticleGroupPage_Fragment': IContentData_ArticleGroupPage_Fragment;'ArticleGroupPageDataFragment': ArticleGroupPageDataFragment } }
) & { ' $fragmentName'?: 'PageData_ArticleGroupPage_Fragment' };

type PageData_ArticleListElement_Fragment = (
  { __typename?: 'ArticleListElement' }
  & { ' $fragmentRefs'?: { 'IContentData_ArticleListElement_Fragment': IContentData_ArticleListElement_Fragment } }
) & { ' $fragmentName'?: 'PageData_ArticleListElement_Fragment' };

type PageData_ArticlePage_Fragment = (
  { __typename?: 'ArticlePage' }
  & { ' $fragmentRefs'?: { 'IContentData_ArticlePage_Fragment': IContentData_ArticlePage_Fragment;'ArticlePageDataFragment': ArticlePageDataFragment } }
) & { ' $fragmentName'?: 'PageData_ArticlePage_Fragment' };

type PageData_BannerBlock_Fragment = (
  { __typename?: 'BannerBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_BannerBlock_Fragment': IContentData_BannerBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_BannerBlock_Fragment' };

type PageData_BlankExperience_Fragment = (
  { __typename?: 'BlankExperience' }
  & { ' $fragmentRefs'?: { 'IContentData_BlankExperience_Fragment': IContentData_BlankExperience_Fragment;'BlankExperienceDataFragment': BlankExperienceDataFragment } }
) & { ' $fragmentName'?: 'PageData_BlankExperience_Fragment' };

type PageData_BlankSection_Fragment = (
  { __typename?: 'BlankSection' }
  & { ' $fragmentRefs'?: { 'IContentData_BlankSection_Fragment': IContentData_BlankSection_Fragment } }
) & { ' $fragmentName'?: 'PageData_BlankSection_Fragment' };

type PageData_BlockTest_Fragment = (
  { __typename?: 'BlockTest' }
  & { ' $fragmentRefs'?: { 'IContentData_BlockTest_Fragment': IContentData_BlockTest_Fragment } }
) & { ' $fragmentName'?: 'PageData_BlockTest_Fragment' };

type PageData_ButtonBlock_Fragment = (
  { __typename?: 'ButtonBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_ButtonBlock_Fragment': IContentData_ButtonBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_ButtonBlock_Fragment' };

type PageData_CTAElement_Fragment = (
  { __typename?: 'CTAElement' }
  & { ' $fragmentRefs'?: { 'IContentData_CTAElement_Fragment': IContentData_CTAElement_Fragment } }
) & { ' $fragmentName'?: 'PageData_CTAElement_Fragment' };

type PageData_CardBlock_Fragment = (
  { __typename?: 'CardBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_CardBlock_Fragment': IContentData_CardBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_CardBlock_Fragment' };

type PageData_DefaultImage_Fragment = (
  { __typename?: 'DefaultImage' }
  & { ' $fragmentRefs'?: { 'IContentData_DefaultImage_Fragment': IContentData_DefaultImage_Fragment } }
) & { ' $fragmentName'?: 'PageData_DefaultImage_Fragment' };

type PageData_DefaultVideo_Fragment = (
  { __typename?: 'DefaultVideo' }
  & { ' $fragmentRefs'?: { 'IContentData_DefaultVideo_Fragment': IContentData_DefaultVideo_Fragment } }
) & { ' $fragmentName'?: 'PageData_DefaultVideo_Fragment' };

type PageData_Dictionary_Fragment = (
  { __typename?: 'Dictionary' }
  & { ' $fragmentRefs'?: { 'IContentData_Dictionary_Fragment': IContentData_Dictionary_Fragment } }
) & { ' $fragmentName'?: 'PageData_Dictionary_Fragment' };

type PageData_DictionaryItem_Fragment = (
  { __typename?: 'DictionaryItem' }
  & { ' $fragmentRefs'?: { 'IContentData_DictionaryItem_Fragment': IContentData_DictionaryItem_Fragment } }
) & { ' $fragmentName'?: 'PageData_DictionaryItem_Fragment' };

type PageData_FoodSuggestionItem_Fragment = (
  { __typename?: 'FoodSuggestionItem' }
  & { ' $fragmentRefs'?: { 'IContentData_FoodSuggestionItem_Fragment': IContentData_FoodSuggestionItem_Fragment } }
) & { ' $fragmentName'?: 'PageData_FoodSuggestionItem_Fragment' };

type PageData_FoodSuggestionItemBlock_Fragment = (
  { __typename?: 'FoodSuggestionItemBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_FoodSuggestionItemBlock_Fragment': IContentData_FoodSuggestionItemBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_FoodSuggestionItemBlock_Fragment' };

type PageData_GenericMedia_Fragment = (
  { __typename?: 'GenericMedia' }
  & { ' $fragmentRefs'?: { 'IContentData_GenericMedia_Fragment': IContentData_GenericMedia_Fragment } }
) & { ' $fragmentName'?: 'PageData_GenericMedia_Fragment' };

type PageData_HeaderBlock_Fragment = (
  { __typename?: 'HeaderBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_HeaderBlock_Fragment': IContentData_HeaderBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_HeaderBlock_Fragment' };

type PageData_HeadingElement_Fragment = (
  { __typename?: 'HeadingElement' }
  & { ' $fragmentRefs'?: { 'IContentData_HeadingElement_Fragment': IContentData_HeadingElement_Fragment } }
) & { ' $fragmentName'?: 'PageData_HeadingElement_Fragment' };

type PageData_Image_Fragment = (
  { __typename?: 'Image' }
  & { ' $fragmentRefs'?: { 'IContentData_Image_Fragment': IContentData_Image_Fragment } }
) & { ' $fragmentName'?: 'PageData_Image_Fragment' };

type PageData_ImageElement_Fragment = (
  { __typename?: 'ImageElement' }
  & { ' $fragmentRefs'?: { 'IContentData_ImageElement_Fragment': IContentData_ImageElement_Fragment } }
) & { ' $fragmentName'?: 'PageData_ImageElement_Fragment' };

type PageData_ImageMedia_Fragment = (
  { __typename?: 'ImageMedia' }
  & { ' $fragmentRefs'?: { 'IContentData_ImageMedia_Fragment': IContentData_ImageMedia_Fragment } }
) & { ' $fragmentName'?: 'PageData_ImageMedia_Fragment' };

type PageData_MegaMenuGroupBlock_Fragment = (
  { __typename?: 'MegaMenuGroupBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_MegaMenuGroupBlock_Fragment': IContentData_MegaMenuGroupBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_MegaMenuGroupBlock_Fragment' };

type PageData_NavigationMenuBlock_Fragment = (
  { __typename?: 'NavigationMenuBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_NavigationMenuBlock_Fragment': IContentData_NavigationMenuBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_NavigationMenuBlock_Fragment' };

type PageData_NewDemopage_Fragment = (
  { __typename?: 'NewDemopage' }
  & { ' $fragmentRefs'?: { 'IContentData_NewDemopage_Fragment': IContentData_NewDemopage_Fragment } }
) & { ' $fragmentName'?: 'PageData_NewDemopage_Fragment' };

type PageData_OfficeLocation_Fragment = (
  { __typename?: 'OfficeLocation' }
  & { ' $fragmentRefs'?: { 'IContentData_OfficeLocation_Fragment': IContentData_OfficeLocation_Fragment } }
) & { ' $fragmentName'?: 'PageData_OfficeLocation_Fragment' };

type PageData_PageSeoSettings_Fragment = (
  { __typename?: 'PageSeoSettings' }
  & { ' $fragmentRefs'?: { 'IContentData_PageSeoSettings_Fragment': IContentData_PageSeoSettings_Fragment } }
) & { ' $fragmentName'?: 'PageData_PageSeoSettings_Fragment' };

type PageData_PagecreatedforSaaSEvaluation_Fragment = (
  { __typename?: 'PagecreatedforSaaSEvaluation' }
  & { ' $fragmentRefs'?: { 'IContentData_PagecreatedforSaaSEvaluation_Fragment': IContentData_PagecreatedforSaaSEvaluation_Fragment } }
) & { ' $fragmentName'?: 'PageData_PagecreatedforSaaSEvaluation_Fragment' };

type PageData_ParagraphElement_Fragment = (
  { __typename?: 'ParagraphElement' }
  & { ' $fragmentRefs'?: { 'IContentData_ParagraphElement_Fragment': IContentData_ParagraphElement_Fragment } }
) & { ' $fragmentName'?: 'PageData_ParagraphElement_Fragment' };

type PageData_SearchPage_Fragment = (
  { __typename?: 'SearchPage' }
  & { ' $fragmentRefs'?: { 'IContentData_SearchPage_Fragment': IContentData_SearchPage_Fragment } }
) & { ' $fragmentName'?: 'PageData_SearchPage_Fragment' };

type PageData_SysContentFolder_Fragment = (
  { __typename?: 'SysContentFolder' }
  & { ' $fragmentRefs'?: { 'IContentData_SysContentFolder_Fragment': IContentData_SysContentFolder_Fragment } }
) & { ' $fragmentName'?: 'PageData_SysContentFolder_Fragment' };

type PageData_TestContent_Fragment = (
  { __typename?: 'TestContent' }
  & { ' $fragmentRefs'?: { 'IContentData_TestContent_Fragment': IContentData_TestContent_Fragment } }
) & { ' $fragmentName'?: 'PageData_TestContent_Fragment' };

type PageData_TestimonialElement_Fragment = (
  { __typename?: 'TestimonialElement' }
  & { ' $fragmentRefs'?: { 'IContentData_TestimonialElement_Fragment': IContentData_TestimonialElement_Fragment } }
) & { ' $fragmentName'?: 'PageData_TestimonialElement_Fragment' };

type PageData_Video_Fragment = (
  { __typename?: 'Video' }
  & { ' $fragmentRefs'?: { 'IContentData_Video_Fragment': IContentData_Video_Fragment } }
) & { ' $fragmentName'?: 'PageData_Video_Fragment' };

type PageData_VideoMedia_Fragment = (
  { __typename?: 'VideoMedia' }
  & { ' $fragmentRefs'?: { 'IContentData_VideoMedia_Fragment': IContentData_VideoMedia_Fragment } }
) & { ' $fragmentName'?: 'PageData_VideoMedia_Fragment' };

type PageData_WebsiteFooter_Fragment = (
  { __typename?: 'WebsiteFooter' }
  & { ' $fragmentRefs'?: { 'IContentData_WebsiteFooter_Fragment': IContentData_WebsiteFooter_Fragment } }
) & { ' $fragmentName'?: 'PageData_WebsiteFooter_Fragment' };

type PageData__Component_Fragment = (
  { __typename?: '_Component' }
  & { ' $fragmentRefs'?: { 'IContentData__Component_Fragment': IContentData__Component_Fragment } }
) & { ' $fragmentName'?: 'PageData__Component_Fragment' };

type PageData__Content_Fragment = (
  { __typename?: '_Content' }
  & { ' $fragmentRefs'?: { 'IContentData__Content_Fragment': IContentData__Content_Fragment } }
) & { ' $fragmentName'?: 'PageData__Content_Fragment' };

type PageData__Element_Fragment = (
  { __typename?: '_Element' }
  & { ' $fragmentRefs'?: { 'IContentData__Element_Fragment': IContentData__Element_Fragment } }
) & { ' $fragmentName'?: 'PageData__Element_Fragment' };

type PageData__Experience_Fragment = (
  { __typename?: '_Experience' }
  & { ' $fragmentRefs'?: { 'IContentData__Experience_Fragment': IContentData__Experience_Fragment } }
) & { ' $fragmentName'?: 'PageData__Experience_Fragment' };

type PageData__Folder_Fragment = (
  { __typename?: '_Folder' }
  & { ' $fragmentRefs'?: { 'IContentData__Folder_Fragment': IContentData__Folder_Fragment } }
) & { ' $fragmentName'?: 'PageData__Folder_Fragment' };

type PageData__Image_Fragment = (
  { __typename?: '_Image' }
  & { ' $fragmentRefs'?: { 'IContentData__Image_Fragment': IContentData__Image_Fragment } }
) & { ' $fragmentName'?: 'PageData__Image_Fragment' };

type PageData__Media_Fragment = (
  { __typename?: '_Media' }
  & { ' $fragmentRefs'?: { 'IContentData__Media_Fragment': IContentData__Media_Fragment } }
) & { ' $fragmentName'?: 'PageData__Media_Fragment' };

type PageData__Page_Fragment = (
  { __typename?: '_Page' }
  & { ' $fragmentRefs'?: { 'IContentData__Page_Fragment': IContentData__Page_Fragment } }
) & { ' $fragmentName'?: 'PageData__Page_Fragment' };

type PageData__Section_Fragment = (
  { __typename?: '_Section' }
  & { ' $fragmentRefs'?: { 'IContentData__Section_Fragment': IContentData__Section_Fragment } }
) & { ' $fragmentName'?: 'PageData__Section_Fragment' };

type PageData__Video_Fragment = (
  { __typename?: '_Video' }
  & { ' $fragmentRefs'?: { 'IContentData__Video_Fragment': IContentData__Video_Fragment } }
) & { ' $fragmentName'?: 'PageData__Video_Fragment' };

type PageData_hero_Fragment = (
  { __typename?: 'hero' }
  & { ' $fragmentRefs'?: { 'IContentData_hero_Fragment': IContentData_hero_Fragment } }
) & { ' $fragmentName'?: 'PageData_hero_Fragment' };

type PageData_hero2_Fragment = (
  { __typename?: 'hero2' }
  & { ' $fragmentRefs'?: { 'IContentData_hero2_Fragment': IContentData_hero2_Fragment } }
) & { ' $fragmentName'?: 'PageData_hero2_Fragment' };

type PageData_hero3_Fragment = (
  { __typename?: 'hero3' }
  & { ' $fragmentRefs'?: { 'IContentData_hero3_Fragment': IContentData_hero3_Fragment } }
) & { ' $fragmentName'?: 'PageData_hero3_Fragment' };

type PageData_hero4_Fragment = (
  { __typename?: 'hero4' }
  & { ' $fragmentRefs'?: { 'IContentData_hero4_Fragment': IContentData_hero4_Fragment } }
) & { ' $fragmentName'?: 'PageData_hero4_Fragment' };

type PageData_heroBanner_Fragment = (
  { __typename?: 'heroBanner' }
  & { ' $fragmentRefs'?: { 'IContentData_heroBanner_Fragment': IContentData_heroBanner_Fragment } }
) & { ' $fragmentName'?: 'PageData_heroBanner_Fragment' };

type PageData_heroBanner2_Fragment = (
  { __typename?: 'heroBanner2' }
  & { ' $fragmentRefs'?: { 'IContentData_heroBanner2_Fragment': IContentData_heroBanner2_Fragment } }
) & { ' $fragmentName'?: 'PageData_heroBanner2_Fragment' };

type PageData_heroBanner3_Fragment = (
  { __typename?: 'heroBanner3' }
  & { ' $fragmentRefs'?: { 'IContentData_heroBanner3_Fragment': IContentData_heroBanner3_Fragment } }
) & { ' $fragmentName'?: 'PageData_heroBanner3_Fragment' };

type PageData_heroBanner4_Fragment = (
  { __typename?: 'heroBanner4' }
  & { ' $fragmentRefs'?: { 'IContentData_heroBanner4_Fragment': IContentData_heroBanner4_Fragment } }
) & { ' $fragmentName'?: 'PageData_heroBanner4_Fragment' };

type PageData_heroBanner5_Fragment = (
  { __typename?: 'heroBanner5' }
  & { ' $fragmentRefs'?: { 'IContentData_heroBanner5_Fragment': IContentData_heroBanner5_Fragment } }
) & { ' $fragmentName'?: 'PageData_heroBanner5_Fragment' };

type PageData_heroBanner6_Fragment = (
  { __typename?: 'heroBanner6' }
  & { ' $fragmentRefs'?: { 'IContentData_heroBanner6_Fragment': IContentData_heroBanner6_Fragment } }
) & { ' $fragmentName'?: 'PageData_heroBanner6_Fragment' };

type PageData_necComponent_Fragment = (
  { __typename?: 'necComponent' }
  & { ' $fragmentRefs'?: { 'IContentData_necComponent_Fragment': IContentData_necComponent_Fragment } }
) & { ' $fragmentName'?: 'PageData_necComponent_Fragment' };

type PageData_newEelem_Fragment = (
  { __typename?: 'newEelem' }
  & { ' $fragmentRefs'?: { 'IContentData_newEelem_Fragment': IContentData_newEelem_Fragment } }
) & { ' $fragmentName'?: 'PageData_newEelem_Fragment' };

export type PageDataFragment = PageData_AIFreePrompt_Fragment | PageData_AIPersonalizedPrompt_Fragment | PageData_AnotherSearch_Fragment | PageData_ArticleGroupPage_Fragment | PageData_ArticleListElement_Fragment | PageData_ArticlePage_Fragment | PageData_BannerBlock_Fragment | PageData_BlankExperience_Fragment | PageData_BlankSection_Fragment | PageData_BlockTest_Fragment | PageData_ButtonBlock_Fragment | PageData_CTAElement_Fragment | PageData_CardBlock_Fragment | PageData_DefaultImage_Fragment | PageData_DefaultVideo_Fragment | PageData_Dictionary_Fragment | PageData_DictionaryItem_Fragment | PageData_FoodSuggestionItem_Fragment | PageData_FoodSuggestionItemBlock_Fragment | PageData_GenericMedia_Fragment | PageData_HeaderBlock_Fragment | PageData_HeadingElement_Fragment | PageData_Image_Fragment | PageData_ImageElement_Fragment | PageData_ImageMedia_Fragment | PageData_MegaMenuGroupBlock_Fragment | PageData_NavigationMenuBlock_Fragment | PageData_NewDemopage_Fragment | PageData_OfficeLocation_Fragment | PageData_PageSeoSettings_Fragment | PageData_PagecreatedforSaaSEvaluation_Fragment | PageData_ParagraphElement_Fragment | PageData_SearchPage_Fragment | PageData_SysContentFolder_Fragment | PageData_TestContent_Fragment | PageData_TestimonialElement_Fragment | PageData_Video_Fragment | PageData_VideoMedia_Fragment | PageData_WebsiteFooter_Fragment | PageData__Component_Fragment | PageData__Content_Fragment | PageData__Element_Fragment | PageData__Experience_Fragment | PageData__Folder_Fragment | PageData__Image_Fragment | PageData__Media_Fragment | PageData__Page_Fragment | PageData__Section_Fragment | PageData__Video_Fragment | PageData_hero_Fragment | PageData_hero2_Fragment | PageData_hero3_Fragment | PageData_hero4_Fragment | PageData_heroBanner_Fragment | PageData_heroBanner2_Fragment | PageData_heroBanner3_Fragment | PageData_heroBanner4_Fragment | PageData_heroBanner5_Fragment | PageData_heroBanner6_Fragment | PageData_necComponent_Fragment | PageData_newEelem_Fragment;

type CompositionData_CompositionElementNode_Fragment = { __typename?: 'CompositionElementNode', type?: string | null, key?: string | null, name?: string | null, layoutType?: string | null, template?: string | null, element?: (
    { __typename?: 'AIFreePrompt' }
    & { ' $fragmentRefs'?: { 'ElementData_AIFreePrompt_Fragment': ElementData_AIFreePrompt_Fragment } }
  ) | (
    { __typename?: 'AIPersonalizedPrompt' }
    & { ' $fragmentRefs'?: { 'ElementData_AIPersonalizedPrompt_Fragment': ElementData_AIPersonalizedPrompt_Fragment } }
  ) | (
    { __typename?: 'ArticleListElement' }
    & { ' $fragmentRefs'?: { 'ElementData_ArticleListElement_Fragment': ElementData_ArticleListElement_Fragment } }
  ) | (
    { __typename?: 'CTAElement' }
    & { ' $fragmentRefs'?: { 'ElementData_CTAElement_Fragment': ElementData_CTAElement_Fragment } }
  ) | (
    { __typename?: 'FoodSuggestionItem' }
    & { ' $fragmentRefs'?: { 'ElementData_FoodSuggestionItem_Fragment': ElementData_FoodSuggestionItem_Fragment } }
  ) | (
    { __typename?: 'HeadingElement' }
    & { ' $fragmentRefs'?: { 'ElementData_HeadingElement_Fragment': ElementData_HeadingElement_Fragment } }
  ) | (
    { __typename?: 'ImageElement' }
    & { ' $fragmentRefs'?: { 'ElementData_ImageElement_Fragment': ElementData_ImageElement_Fragment } }
  ) | (
    { __typename?: 'ParagraphElement' }
    & { ' $fragmentRefs'?: { 'ElementData_ParagraphElement_Fragment': ElementData_ParagraphElement_Fragment } }
  ) | (
    { __typename?: 'TestimonialElement' }
    & { ' $fragmentRefs'?: { 'ElementData_TestimonialElement_Fragment': ElementData_TestimonialElement_Fragment } }
  ) | (
    { __typename?: '_Element' }
    & { ' $fragmentRefs'?: { 'ElementData__Element_Fragment': ElementData__Element_Fragment } }
  ) | (
    { __typename?: 'newEelem' }
    & { ' $fragmentRefs'?: { 'ElementData_newEelem_Fragment': ElementData_newEelem_Fragment } }
  ) | null, settings?: Array<{ __typename?: 'CompositionDisplaySetting', key?: string | null, value?: string | null } | null> | null } & { ' $fragmentName'?: 'CompositionData_CompositionElementNode_Fragment' };

type CompositionData_CompositionNode_Fragment = { __typename?: 'CompositionNode', type?: string | null, key?: string | null, name?: string | null, layoutType?: string | null, template?: string | null, settings?: Array<{ __typename?: 'CompositionDisplaySetting', key?: string | null, value?: string | null } | null> | null } & { ' $fragmentName'?: 'CompositionData_CompositionNode_Fragment' };

type CompositionData_CompositionStructureNode_Fragment = { __typename?: 'CompositionStructureNode', type?: string | null, key?: string | null, name?: string | null, layoutType?: string | null, template?: string | null, nodes?: Array<{ __typename?: 'CompositionElementNode', name?: string | null } | { __typename?: 'CompositionNode', name?: string | null } | { __typename?: 'CompositionStructureNode', name?: string | null } | null> | null, settings?: Array<{ __typename?: 'CompositionDisplaySetting', key?: string | null, value?: string | null } | null> | null } & { ' $fragmentName'?: 'CompositionData_CompositionStructureNode_Fragment' };

export type CompositionDataFragment = CompositionData_CompositionElementNode_Fragment | CompositionData_CompositionNode_Fragment | CompositionData_CompositionStructureNode_Fragment;

type BlockData_AIFreePrompt_Fragment = (
  { __typename?: 'AIFreePrompt' }
  & { ' $fragmentRefs'?: { 'IContentData_AIFreePrompt_Fragment': IContentData_AIFreePrompt_Fragment } }
) & { ' $fragmentName'?: 'BlockData_AIFreePrompt_Fragment' };

type BlockData_AIPersonalizedPrompt_Fragment = (
  { __typename?: 'AIPersonalizedPrompt' }
  & { ' $fragmentRefs'?: { 'IContentData_AIPersonalizedPrompt_Fragment': IContentData_AIPersonalizedPrompt_Fragment } }
) & { ' $fragmentName'?: 'BlockData_AIPersonalizedPrompt_Fragment' };

type BlockData_AnotherSearch_Fragment = (
  { __typename?: 'AnotherSearch' }
  & { ' $fragmentRefs'?: { 'IContentData_AnotherSearch_Fragment': IContentData_AnotherSearch_Fragment } }
) & { ' $fragmentName'?: 'BlockData_AnotherSearch_Fragment' };

type BlockData_ArticleGroupPage_Fragment = (
  { __typename?: 'ArticleGroupPage' }
  & { ' $fragmentRefs'?: { 'IContentData_ArticleGroupPage_Fragment': IContentData_ArticleGroupPage_Fragment } }
) & { ' $fragmentName'?: 'BlockData_ArticleGroupPage_Fragment' };

type BlockData_ArticleListElement_Fragment = (
  { __typename?: 'ArticleListElement' }
  & { ' $fragmentRefs'?: { 'IContentData_ArticleListElement_Fragment': IContentData_ArticleListElement_Fragment } }
) & { ' $fragmentName'?: 'BlockData_ArticleListElement_Fragment' };

type BlockData_ArticlePage_Fragment = (
  { __typename?: 'ArticlePage' }
  & { ' $fragmentRefs'?: { 'IContentData_ArticlePage_Fragment': IContentData_ArticlePage_Fragment } }
) & { ' $fragmentName'?: 'BlockData_ArticlePage_Fragment' };

type BlockData_BannerBlock_Fragment = (
  { __typename?: 'BannerBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_BannerBlock_Fragment': IContentData_BannerBlock_Fragment } }
) & { ' $fragmentName'?: 'BlockData_BannerBlock_Fragment' };

type BlockData_BlankExperience_Fragment = (
  { __typename?: 'BlankExperience' }
  & { ' $fragmentRefs'?: { 'IContentData_BlankExperience_Fragment': IContentData_BlankExperience_Fragment } }
) & { ' $fragmentName'?: 'BlockData_BlankExperience_Fragment' };

type BlockData_BlankSection_Fragment = (
  { __typename?: 'BlankSection' }
  & { ' $fragmentRefs'?: { 'IContentData_BlankSection_Fragment': IContentData_BlankSection_Fragment } }
) & { ' $fragmentName'?: 'BlockData_BlankSection_Fragment' };

type BlockData_BlockTest_Fragment = (
  { __typename?: 'BlockTest' }
  & { ' $fragmentRefs'?: { 'IContentData_BlockTest_Fragment': IContentData_BlockTest_Fragment } }
) & { ' $fragmentName'?: 'BlockData_BlockTest_Fragment' };

type BlockData_ButtonBlock_Fragment = (
  { __typename?: 'ButtonBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_ButtonBlock_Fragment': IContentData_ButtonBlock_Fragment;'ButtonBlockDataFragment': ButtonBlockDataFragment } }
) & { ' $fragmentName'?: 'BlockData_ButtonBlock_Fragment' };

type BlockData_CTAElement_Fragment = (
  { __typename?: 'CTAElement' }
  & { ' $fragmentRefs'?: { 'IContentData_CTAElement_Fragment': IContentData_CTAElement_Fragment } }
) & { ' $fragmentName'?: 'BlockData_CTAElement_Fragment' };

type BlockData_CardBlock_Fragment = (
  { __typename?: 'CardBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_CardBlock_Fragment': IContentData_CardBlock_Fragment;'CardBlockDataFragment': CardBlockDataFragment } }
) & { ' $fragmentName'?: 'BlockData_CardBlock_Fragment' };

type BlockData_DefaultImage_Fragment = (
  { __typename?: 'DefaultImage' }
  & { ' $fragmentRefs'?: { 'IContentData_DefaultImage_Fragment': IContentData_DefaultImage_Fragment } }
) & { ' $fragmentName'?: 'BlockData_DefaultImage_Fragment' };

type BlockData_DefaultVideo_Fragment = (
  { __typename?: 'DefaultVideo' }
  & { ' $fragmentRefs'?: { 'IContentData_DefaultVideo_Fragment': IContentData_DefaultVideo_Fragment } }
) & { ' $fragmentName'?: 'BlockData_DefaultVideo_Fragment' };

type BlockData_Dictionary_Fragment = (
  { __typename?: 'Dictionary' }
  & { ' $fragmentRefs'?: { 'IContentData_Dictionary_Fragment': IContentData_Dictionary_Fragment } }
) & { ' $fragmentName'?: 'BlockData_Dictionary_Fragment' };

type BlockData_DictionaryItem_Fragment = (
  { __typename?: 'DictionaryItem' }
  & { ' $fragmentRefs'?: { 'IContentData_DictionaryItem_Fragment': IContentData_DictionaryItem_Fragment } }
) & { ' $fragmentName'?: 'BlockData_DictionaryItem_Fragment' };

type BlockData_FoodSuggestionItem_Fragment = (
  { __typename?: 'FoodSuggestionItem' }
  & { ' $fragmentRefs'?: { 'IContentData_FoodSuggestionItem_Fragment': IContentData_FoodSuggestionItem_Fragment } }
) & { ' $fragmentName'?: 'BlockData_FoodSuggestionItem_Fragment' };

type BlockData_FoodSuggestionItemBlock_Fragment = (
  { __typename?: 'FoodSuggestionItemBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_FoodSuggestionItemBlock_Fragment': IContentData_FoodSuggestionItemBlock_Fragment } }
) & { ' $fragmentName'?: 'BlockData_FoodSuggestionItemBlock_Fragment' };

type BlockData_GenericMedia_Fragment = (
  { __typename?: 'GenericMedia' }
  & { ' $fragmentRefs'?: { 'IContentData_GenericMedia_Fragment': IContentData_GenericMedia_Fragment } }
) & { ' $fragmentName'?: 'BlockData_GenericMedia_Fragment' };

type BlockData_HeaderBlock_Fragment = (
  { __typename?: 'HeaderBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_HeaderBlock_Fragment': IContentData_HeaderBlock_Fragment } }
) & { ' $fragmentName'?: 'BlockData_HeaderBlock_Fragment' };

type BlockData_HeadingElement_Fragment = (
  { __typename?: 'HeadingElement' }
  & { ' $fragmentRefs'?: { 'IContentData_HeadingElement_Fragment': IContentData_HeadingElement_Fragment } }
) & { ' $fragmentName'?: 'BlockData_HeadingElement_Fragment' };

type BlockData_Image_Fragment = (
  { __typename?: 'Image' }
  & { ' $fragmentRefs'?: { 'IContentData_Image_Fragment': IContentData_Image_Fragment } }
) & { ' $fragmentName'?: 'BlockData_Image_Fragment' };

type BlockData_ImageElement_Fragment = (
  { __typename?: 'ImageElement' }
  & { ' $fragmentRefs'?: { 'IContentData_ImageElement_Fragment': IContentData_ImageElement_Fragment } }
) & { ' $fragmentName'?: 'BlockData_ImageElement_Fragment' };

type BlockData_ImageMedia_Fragment = (
  { __typename?: 'ImageMedia' }
  & { ' $fragmentRefs'?: { 'IContentData_ImageMedia_Fragment': IContentData_ImageMedia_Fragment } }
) & { ' $fragmentName'?: 'BlockData_ImageMedia_Fragment' };

type BlockData_MegaMenuGroupBlock_Fragment = (
  { __typename?: 'MegaMenuGroupBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_MegaMenuGroupBlock_Fragment': IContentData_MegaMenuGroupBlock_Fragment;'MegaMenuGroupBlockDataFragment': MegaMenuGroupBlockDataFragment } }
) & { ' $fragmentName'?: 'BlockData_MegaMenuGroupBlock_Fragment' };

type BlockData_NavigationMenuBlock_Fragment = (
  { __typename?: 'NavigationMenuBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_NavigationMenuBlock_Fragment': IContentData_NavigationMenuBlock_Fragment;'NavigationMenuBlockDataFragment': NavigationMenuBlockDataFragment } }
) & { ' $fragmentName'?: 'BlockData_NavigationMenuBlock_Fragment' };

type BlockData_NewDemopage_Fragment = (
  { __typename?: 'NewDemopage' }
  & { ' $fragmentRefs'?: { 'IContentData_NewDemopage_Fragment': IContentData_NewDemopage_Fragment } }
) & { ' $fragmentName'?: 'BlockData_NewDemopage_Fragment' };

type BlockData_OfficeLocation_Fragment = (
  { __typename?: 'OfficeLocation' }
  & { ' $fragmentRefs'?: { 'IContentData_OfficeLocation_Fragment': IContentData_OfficeLocation_Fragment;'OfficeLocationDataFragment': OfficeLocationDataFragment } }
) & { ' $fragmentName'?: 'BlockData_OfficeLocation_Fragment' };

type BlockData_PageSeoSettings_Fragment = (
  { __typename?: 'PageSeoSettings' }
  & { ' $fragmentRefs'?: { 'IContentData_PageSeoSettings_Fragment': IContentData_PageSeoSettings_Fragment } }
) & { ' $fragmentName'?: 'BlockData_PageSeoSettings_Fragment' };

type BlockData_PagecreatedforSaaSEvaluation_Fragment = (
  { __typename?: 'PagecreatedforSaaSEvaluation' }
  & { ' $fragmentRefs'?: { 'IContentData_PagecreatedforSaaSEvaluation_Fragment': IContentData_PagecreatedforSaaSEvaluation_Fragment } }
) & { ' $fragmentName'?: 'BlockData_PagecreatedforSaaSEvaluation_Fragment' };

type BlockData_ParagraphElement_Fragment = (
  { __typename?: 'ParagraphElement' }
  & { ' $fragmentRefs'?: { 'IContentData_ParagraphElement_Fragment': IContentData_ParagraphElement_Fragment } }
) & { ' $fragmentName'?: 'BlockData_ParagraphElement_Fragment' };

type BlockData_SearchPage_Fragment = (
  { __typename?: 'SearchPage' }
  & { ' $fragmentRefs'?: { 'IContentData_SearchPage_Fragment': IContentData_SearchPage_Fragment } }
) & { ' $fragmentName'?: 'BlockData_SearchPage_Fragment' };

type BlockData_SysContentFolder_Fragment = (
  { __typename?: 'SysContentFolder' }
  & { ' $fragmentRefs'?: { 'IContentData_SysContentFolder_Fragment': IContentData_SysContentFolder_Fragment } }
) & { ' $fragmentName'?: 'BlockData_SysContentFolder_Fragment' };

type BlockData_TestContent_Fragment = (
  { __typename?: 'TestContent' }
  & { ' $fragmentRefs'?: { 'IContentData_TestContent_Fragment': IContentData_TestContent_Fragment } }
) & { ' $fragmentName'?: 'BlockData_TestContent_Fragment' };

type BlockData_TestimonialElement_Fragment = (
  { __typename?: 'TestimonialElement' }
  & { ' $fragmentRefs'?: { 'IContentData_TestimonialElement_Fragment': IContentData_TestimonialElement_Fragment } }
) & { ' $fragmentName'?: 'BlockData_TestimonialElement_Fragment' };

type BlockData_Video_Fragment = (
  { __typename?: 'Video' }
  & { ' $fragmentRefs'?: { 'IContentData_Video_Fragment': IContentData_Video_Fragment } }
) & { ' $fragmentName'?: 'BlockData_Video_Fragment' };

type BlockData_VideoMedia_Fragment = (
  { __typename?: 'VideoMedia' }
  & { ' $fragmentRefs'?: { 'IContentData_VideoMedia_Fragment': IContentData_VideoMedia_Fragment } }
) & { ' $fragmentName'?: 'BlockData_VideoMedia_Fragment' };

type BlockData_WebsiteFooter_Fragment = (
  { __typename?: 'WebsiteFooter' }
  & { ' $fragmentRefs'?: { 'IContentData_WebsiteFooter_Fragment': IContentData_WebsiteFooter_Fragment } }
) & { ' $fragmentName'?: 'BlockData_WebsiteFooter_Fragment' };

type BlockData__Component_Fragment = (
  { __typename?: '_Component' }
  & { ' $fragmentRefs'?: { 'IContentData__Component_Fragment': IContentData__Component_Fragment } }
) & { ' $fragmentName'?: 'BlockData__Component_Fragment' };

type BlockData__Content_Fragment = (
  { __typename?: '_Content' }
  & { ' $fragmentRefs'?: { 'IContentData__Content_Fragment': IContentData__Content_Fragment } }
) & { ' $fragmentName'?: 'BlockData__Content_Fragment' };

type BlockData__Element_Fragment = (
  { __typename?: '_Element' }
  & { ' $fragmentRefs'?: { 'IContentData__Element_Fragment': IContentData__Element_Fragment } }
) & { ' $fragmentName'?: 'BlockData__Element_Fragment' };

type BlockData__Experience_Fragment = (
  { __typename?: '_Experience' }
  & { ' $fragmentRefs'?: { 'IContentData__Experience_Fragment': IContentData__Experience_Fragment } }
) & { ' $fragmentName'?: 'BlockData__Experience_Fragment' };

type BlockData__Folder_Fragment = (
  { __typename?: '_Folder' }
  & { ' $fragmentRefs'?: { 'IContentData__Folder_Fragment': IContentData__Folder_Fragment } }
) & { ' $fragmentName'?: 'BlockData__Folder_Fragment' };

type BlockData__Image_Fragment = (
  { __typename?: '_Image' }
  & { ' $fragmentRefs'?: { 'IContentData__Image_Fragment': IContentData__Image_Fragment } }
) & { ' $fragmentName'?: 'BlockData__Image_Fragment' };

type BlockData__Media_Fragment = (
  { __typename?: '_Media' }
  & { ' $fragmentRefs'?: { 'IContentData__Media_Fragment': IContentData__Media_Fragment } }
) & { ' $fragmentName'?: 'BlockData__Media_Fragment' };

type BlockData__Page_Fragment = (
  { __typename?: '_Page' }
  & { ' $fragmentRefs'?: { 'IContentData__Page_Fragment': IContentData__Page_Fragment } }
) & { ' $fragmentName'?: 'BlockData__Page_Fragment' };

type BlockData__Section_Fragment = (
  { __typename?: '_Section' }
  & { ' $fragmentRefs'?: { 'IContentData__Section_Fragment': IContentData__Section_Fragment } }
) & { ' $fragmentName'?: 'BlockData__Section_Fragment' };

type BlockData__Video_Fragment = (
  { __typename?: '_Video' }
  & { ' $fragmentRefs'?: { 'IContentData__Video_Fragment': IContentData__Video_Fragment } }
) & { ' $fragmentName'?: 'BlockData__Video_Fragment' };

type BlockData_hero_Fragment = (
  { __typename?: 'hero' }
  & { ' $fragmentRefs'?: { 'IContentData_hero_Fragment': IContentData_hero_Fragment } }
) & { ' $fragmentName'?: 'BlockData_hero_Fragment' };

type BlockData_hero2_Fragment = (
  { __typename?: 'hero2' }
  & { ' $fragmentRefs'?: { 'IContentData_hero2_Fragment': IContentData_hero2_Fragment } }
) & { ' $fragmentName'?: 'BlockData_hero2_Fragment' };

type BlockData_hero3_Fragment = (
  { __typename?: 'hero3' }
  & { ' $fragmentRefs'?: { 'IContentData_hero3_Fragment': IContentData_hero3_Fragment } }
) & { ' $fragmentName'?: 'BlockData_hero3_Fragment' };

type BlockData_hero4_Fragment = (
  { __typename?: 'hero4' }
  & { ' $fragmentRefs'?: { 'IContentData_hero4_Fragment': IContentData_hero4_Fragment } }
) & { ' $fragmentName'?: 'BlockData_hero4_Fragment' };

type BlockData_heroBanner_Fragment = (
  { __typename?: 'heroBanner' }
  & { ' $fragmentRefs'?: { 'IContentData_heroBanner_Fragment': IContentData_heroBanner_Fragment } }
) & { ' $fragmentName'?: 'BlockData_heroBanner_Fragment' };

type BlockData_heroBanner2_Fragment = (
  { __typename?: 'heroBanner2' }
  & { ' $fragmentRefs'?: { 'IContentData_heroBanner2_Fragment': IContentData_heroBanner2_Fragment } }
) & { ' $fragmentName'?: 'BlockData_heroBanner2_Fragment' };

type BlockData_heroBanner3_Fragment = (
  { __typename?: 'heroBanner3' }
  & { ' $fragmentRefs'?: { 'IContentData_heroBanner3_Fragment': IContentData_heroBanner3_Fragment } }
) & { ' $fragmentName'?: 'BlockData_heroBanner3_Fragment' };

type BlockData_heroBanner4_Fragment = (
  { __typename?: 'heroBanner4' }
  & { ' $fragmentRefs'?: { 'IContentData_heroBanner4_Fragment': IContentData_heroBanner4_Fragment } }
) & { ' $fragmentName'?: 'BlockData_heroBanner4_Fragment' };

type BlockData_heroBanner5_Fragment = (
  { __typename?: 'heroBanner5' }
  & { ' $fragmentRefs'?: { 'IContentData_heroBanner5_Fragment': IContentData_heroBanner5_Fragment } }
) & { ' $fragmentName'?: 'BlockData_heroBanner5_Fragment' };

type BlockData_heroBanner6_Fragment = (
  { __typename?: 'heroBanner6' }
  & { ' $fragmentRefs'?: { 'IContentData_heroBanner6_Fragment': IContentData_heroBanner6_Fragment } }
) & { ' $fragmentName'?: 'BlockData_heroBanner6_Fragment' };

type BlockData_necComponent_Fragment = (
  { __typename?: 'necComponent' }
  & { ' $fragmentRefs'?: { 'IContentData_necComponent_Fragment': IContentData_necComponent_Fragment } }
) & { ' $fragmentName'?: 'BlockData_necComponent_Fragment' };

type BlockData_newEelem_Fragment = (
  { __typename?: 'newEelem' }
  & { ' $fragmentRefs'?: { 'IContentData_newEelem_Fragment': IContentData_newEelem_Fragment } }
) & { ' $fragmentName'?: 'BlockData_newEelem_Fragment' };

export type BlockDataFragment = BlockData_AIFreePrompt_Fragment | BlockData_AIPersonalizedPrompt_Fragment | BlockData_AnotherSearch_Fragment | BlockData_ArticleGroupPage_Fragment | BlockData_ArticleListElement_Fragment | BlockData_ArticlePage_Fragment | BlockData_BannerBlock_Fragment | BlockData_BlankExperience_Fragment | BlockData_BlankSection_Fragment | BlockData_BlockTest_Fragment | BlockData_ButtonBlock_Fragment | BlockData_CTAElement_Fragment | BlockData_CardBlock_Fragment | BlockData_DefaultImage_Fragment | BlockData_DefaultVideo_Fragment | BlockData_Dictionary_Fragment | BlockData_DictionaryItem_Fragment | BlockData_FoodSuggestionItem_Fragment | BlockData_FoodSuggestionItemBlock_Fragment | BlockData_GenericMedia_Fragment | BlockData_HeaderBlock_Fragment | BlockData_HeadingElement_Fragment | BlockData_Image_Fragment | BlockData_ImageElement_Fragment | BlockData_ImageMedia_Fragment | BlockData_MegaMenuGroupBlock_Fragment | BlockData_NavigationMenuBlock_Fragment | BlockData_NewDemopage_Fragment | BlockData_OfficeLocation_Fragment | BlockData_PageSeoSettings_Fragment | BlockData_PagecreatedforSaaSEvaluation_Fragment | BlockData_ParagraphElement_Fragment | BlockData_SearchPage_Fragment | BlockData_SysContentFolder_Fragment | BlockData_TestContent_Fragment | BlockData_TestimonialElement_Fragment | BlockData_Video_Fragment | BlockData_VideoMedia_Fragment | BlockData_WebsiteFooter_Fragment | BlockData__Component_Fragment | BlockData__Content_Fragment | BlockData__Element_Fragment | BlockData__Experience_Fragment | BlockData__Folder_Fragment | BlockData__Image_Fragment | BlockData__Media_Fragment | BlockData__Page_Fragment | BlockData__Section_Fragment | BlockData__Video_Fragment | BlockData_hero_Fragment | BlockData_hero2_Fragment | BlockData_hero3_Fragment | BlockData_hero4_Fragment | BlockData_heroBanner_Fragment | BlockData_heroBanner2_Fragment | BlockData_heroBanner3_Fragment | BlockData_heroBanner4_Fragment | BlockData_heroBanner5_Fragment | BlockData_heroBanner6_Fragment | BlockData_necComponent_Fragment | BlockData_newEelem_Fragment;

type IContentInfo_ContentMetadata_Fragment = { __typename?: 'ContentMetadata', key?: string | null, locale?: string | null, types?: Array<string | null> | null, displayName?: string | null, version?: string | null, url?: (
    { __typename?: 'ContentUrl' }
    & { ' $fragmentRefs'?: { 'LinkDataFragment': LinkDataFragment } }
  ) | null } & { ' $fragmentName'?: 'IContentInfo_ContentMetadata_Fragment' };

type IContentInfo_InstanceMetadata_Fragment = { __typename?: 'InstanceMetadata', key?: string | null, locale?: string | null, types?: Array<string | null> | null, displayName?: string | null, version?: string | null, url?: (
    { __typename?: 'ContentUrl' }
    & { ' $fragmentRefs'?: { 'LinkDataFragment': LinkDataFragment } }
  ) | null } & { ' $fragmentName'?: 'IContentInfo_InstanceMetadata_Fragment' };

type IContentInfo_ItemMetadata_Fragment = { __typename?: 'ItemMetadata', key?: string | null, locale?: string | null, types?: Array<string | null> | null, displayName?: string | null, version?: string | null, url?: (
    { __typename?: 'ContentUrl' }
    & { ' $fragmentRefs'?: { 'LinkDataFragment': LinkDataFragment } }
  ) | null } & { ' $fragmentName'?: 'IContentInfo_ItemMetadata_Fragment' };

type IContentInfo_MediaMetadata_Fragment = { __typename?: 'MediaMetadata', key?: string | null, locale?: string | null, types?: Array<string | null> | null, displayName?: string | null, version?: string | null, url?: (
    { __typename?: 'ContentUrl' }
    & { ' $fragmentRefs'?: { 'LinkDataFragment': LinkDataFragment } }
  ) | null } & { ' $fragmentName'?: 'IContentInfo_MediaMetadata_Fragment' };

export type IContentInfoFragment = IContentInfo_ContentMetadata_Fragment | IContentInfo_InstanceMetadata_Fragment | IContentInfo_ItemMetadata_Fragment | IContentInfo_MediaMetadata_Fragment;

export type getContentByIdQueryVariables = Exact<{
  key: Scalars['String']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<Array<Locales> | Locales>;
  path?: InputMaybe<Scalars['String']['input']>;
  domain?: InputMaybe<Scalars['String']['input']>;
}>;


export type getContentByIdQuery = { __typename?: 'Query', content?: { __typename?: '_ContentOutput', total?: number | null, items?: Array<(
      { __typename?: 'AIFreePrompt' }
      & { ' $fragmentRefs'?: { 'BlockData_AIFreePrompt_Fragment': BlockData_AIFreePrompt_Fragment;'PageData_AIFreePrompt_Fragment': PageData_AIFreePrompt_Fragment } }
    ) | (
      { __typename?: 'AIPersonalizedPrompt' }
      & { ' $fragmentRefs'?: { 'BlockData_AIPersonalizedPrompt_Fragment': BlockData_AIPersonalizedPrompt_Fragment;'PageData_AIPersonalizedPrompt_Fragment': PageData_AIPersonalizedPrompt_Fragment } }
    ) | (
      { __typename?: 'AnotherSearch' }
      & { ' $fragmentRefs'?: { 'BlockData_AnotherSearch_Fragment': BlockData_AnotherSearch_Fragment;'PageData_AnotherSearch_Fragment': PageData_AnotherSearch_Fragment } }
    ) | (
      { __typename?: 'ArticleGroupPage' }
      & { ' $fragmentRefs'?: { 'BlockData_ArticleGroupPage_Fragment': BlockData_ArticleGroupPage_Fragment;'PageData_ArticleGroupPage_Fragment': PageData_ArticleGroupPage_Fragment } }
    ) | (
      { __typename?: 'ArticleListElement' }
      & { ' $fragmentRefs'?: { 'BlockData_ArticleListElement_Fragment': BlockData_ArticleListElement_Fragment;'PageData_ArticleListElement_Fragment': PageData_ArticleListElement_Fragment } }
    ) | (
      { __typename?: 'ArticlePage' }
      & { ' $fragmentRefs'?: { 'BlockData_ArticlePage_Fragment': BlockData_ArticlePage_Fragment;'PageData_ArticlePage_Fragment': PageData_ArticlePage_Fragment } }
    ) | (
      { __typename?: 'BannerBlock' }
      & { ' $fragmentRefs'?: { 'BlockData_BannerBlock_Fragment': BlockData_BannerBlock_Fragment;'PageData_BannerBlock_Fragment': PageData_BannerBlock_Fragment } }
    ) | (
      { __typename?: 'BlankExperience' }
      & { ' $fragmentRefs'?: { 'BlockData_BlankExperience_Fragment': BlockData_BlankExperience_Fragment;'PageData_BlankExperience_Fragment': PageData_BlankExperience_Fragment } }
    ) | (
      { __typename?: 'BlankSection' }
      & { ' $fragmentRefs'?: { 'BlockData_BlankSection_Fragment': BlockData_BlankSection_Fragment;'PageData_BlankSection_Fragment': PageData_BlankSection_Fragment } }
    ) | (
      { __typename?: 'BlockTest' }
      & { ' $fragmentRefs'?: { 'BlockData_BlockTest_Fragment': BlockData_BlockTest_Fragment;'PageData_BlockTest_Fragment': PageData_BlockTest_Fragment } }
    ) | (
      { __typename?: 'ButtonBlock' }
      & { ' $fragmentRefs'?: { 'BlockData_ButtonBlock_Fragment': BlockData_ButtonBlock_Fragment;'PageData_ButtonBlock_Fragment': PageData_ButtonBlock_Fragment } }
    ) | (
      { __typename?: 'CTAElement' }
      & { ' $fragmentRefs'?: { 'BlockData_CTAElement_Fragment': BlockData_CTAElement_Fragment;'PageData_CTAElement_Fragment': PageData_CTAElement_Fragment } }
    ) | (
      { __typename?: 'CardBlock' }
      & { ' $fragmentRefs'?: { 'BlockData_CardBlock_Fragment': BlockData_CardBlock_Fragment;'PageData_CardBlock_Fragment': PageData_CardBlock_Fragment } }
    ) | (
      { __typename?: 'DefaultImage' }
      & { ' $fragmentRefs'?: { 'BlockData_DefaultImage_Fragment': BlockData_DefaultImage_Fragment;'PageData_DefaultImage_Fragment': PageData_DefaultImage_Fragment } }
    ) | (
      { __typename?: 'DefaultVideo' }
      & { ' $fragmentRefs'?: { 'BlockData_DefaultVideo_Fragment': BlockData_DefaultVideo_Fragment;'PageData_DefaultVideo_Fragment': PageData_DefaultVideo_Fragment } }
    ) | (
      { __typename?: 'Dictionary' }
      & { ' $fragmentRefs'?: { 'BlockData_Dictionary_Fragment': BlockData_Dictionary_Fragment;'PageData_Dictionary_Fragment': PageData_Dictionary_Fragment } }
    ) | (
      { __typename?: 'DictionaryItem' }
      & { ' $fragmentRefs'?: { 'BlockData_DictionaryItem_Fragment': BlockData_DictionaryItem_Fragment;'PageData_DictionaryItem_Fragment': PageData_DictionaryItem_Fragment } }
    ) | (
      { __typename?: 'FoodSuggestionItem' }
      & { ' $fragmentRefs'?: { 'BlockData_FoodSuggestionItem_Fragment': BlockData_FoodSuggestionItem_Fragment;'PageData_FoodSuggestionItem_Fragment': PageData_FoodSuggestionItem_Fragment } }
    ) | (
      { __typename?: 'FoodSuggestionItemBlock' }
      & { ' $fragmentRefs'?: { 'BlockData_FoodSuggestionItemBlock_Fragment': BlockData_FoodSuggestionItemBlock_Fragment;'PageData_FoodSuggestionItemBlock_Fragment': PageData_FoodSuggestionItemBlock_Fragment } }
    ) | (
      { __typename?: 'GenericMedia' }
      & { ' $fragmentRefs'?: { 'BlockData_GenericMedia_Fragment': BlockData_GenericMedia_Fragment;'PageData_GenericMedia_Fragment': PageData_GenericMedia_Fragment } }
    ) | (
      { __typename?: 'HeaderBlock' }
      & { ' $fragmentRefs'?: { 'BlockData_HeaderBlock_Fragment': BlockData_HeaderBlock_Fragment;'PageData_HeaderBlock_Fragment': PageData_HeaderBlock_Fragment } }
    ) | (
      { __typename?: 'HeadingElement' }
      & { ' $fragmentRefs'?: { 'BlockData_HeadingElement_Fragment': BlockData_HeadingElement_Fragment;'PageData_HeadingElement_Fragment': PageData_HeadingElement_Fragment } }
    ) | (
      { __typename?: 'Image' }
      & { ' $fragmentRefs'?: { 'BlockData_Image_Fragment': BlockData_Image_Fragment;'PageData_Image_Fragment': PageData_Image_Fragment } }
    ) | (
      { __typename?: 'ImageElement' }
      & { ' $fragmentRefs'?: { 'BlockData_ImageElement_Fragment': BlockData_ImageElement_Fragment;'PageData_ImageElement_Fragment': PageData_ImageElement_Fragment } }
    ) | (
      { __typename?: 'ImageMedia' }
      & { ' $fragmentRefs'?: { 'BlockData_ImageMedia_Fragment': BlockData_ImageMedia_Fragment;'PageData_ImageMedia_Fragment': PageData_ImageMedia_Fragment } }
    ) | (
      { __typename?: 'MegaMenuGroupBlock' }
      & { ' $fragmentRefs'?: { 'BlockData_MegaMenuGroupBlock_Fragment': BlockData_MegaMenuGroupBlock_Fragment;'PageData_MegaMenuGroupBlock_Fragment': PageData_MegaMenuGroupBlock_Fragment } }
    ) | (
      { __typename?: 'NavigationMenuBlock' }
      & { ' $fragmentRefs'?: { 'BlockData_NavigationMenuBlock_Fragment': BlockData_NavigationMenuBlock_Fragment;'PageData_NavigationMenuBlock_Fragment': PageData_NavigationMenuBlock_Fragment } }
    ) | (
      { __typename?: 'NewDemopage' }
      & { ' $fragmentRefs'?: { 'BlockData_NewDemopage_Fragment': BlockData_NewDemopage_Fragment;'PageData_NewDemopage_Fragment': PageData_NewDemopage_Fragment } }
    ) | (
      { __typename?: 'OfficeLocation' }
      & { ' $fragmentRefs'?: { 'BlockData_OfficeLocation_Fragment': BlockData_OfficeLocation_Fragment;'PageData_OfficeLocation_Fragment': PageData_OfficeLocation_Fragment } }
    ) | (
      { __typename?: 'PageSeoSettings' }
      & { ' $fragmentRefs'?: { 'BlockData_PageSeoSettings_Fragment': BlockData_PageSeoSettings_Fragment;'PageData_PageSeoSettings_Fragment': PageData_PageSeoSettings_Fragment } }
    ) | (
      { __typename?: 'PagecreatedforSaaSEvaluation' }
      & { ' $fragmentRefs'?: { 'BlockData_PagecreatedforSaaSEvaluation_Fragment': BlockData_PagecreatedforSaaSEvaluation_Fragment;'PageData_PagecreatedforSaaSEvaluation_Fragment': PageData_PagecreatedforSaaSEvaluation_Fragment } }
    ) | (
      { __typename?: 'ParagraphElement' }
      & { ' $fragmentRefs'?: { 'BlockData_ParagraphElement_Fragment': BlockData_ParagraphElement_Fragment;'PageData_ParagraphElement_Fragment': PageData_ParagraphElement_Fragment } }
    ) | (
      { __typename?: 'SearchPage' }
      & { ' $fragmentRefs'?: { 'BlockData_SearchPage_Fragment': BlockData_SearchPage_Fragment;'PageData_SearchPage_Fragment': PageData_SearchPage_Fragment } }
    ) | (
      { __typename?: 'SysContentFolder' }
      & { ' $fragmentRefs'?: { 'BlockData_SysContentFolder_Fragment': BlockData_SysContentFolder_Fragment;'PageData_SysContentFolder_Fragment': PageData_SysContentFolder_Fragment } }
    ) | (
      { __typename?: 'TestContent' }
      & { ' $fragmentRefs'?: { 'BlockData_TestContent_Fragment': BlockData_TestContent_Fragment;'PageData_TestContent_Fragment': PageData_TestContent_Fragment } }
    ) | (
      { __typename?: 'TestimonialElement' }
      & { ' $fragmentRefs'?: { 'BlockData_TestimonialElement_Fragment': BlockData_TestimonialElement_Fragment;'PageData_TestimonialElement_Fragment': PageData_TestimonialElement_Fragment } }
    ) | (
      { __typename?: 'Video' }
      & { ' $fragmentRefs'?: { 'BlockData_Video_Fragment': BlockData_Video_Fragment;'PageData_Video_Fragment': PageData_Video_Fragment } }
    ) | (
      { __typename?: 'VideoMedia' }
      & { ' $fragmentRefs'?: { 'BlockData_VideoMedia_Fragment': BlockData_VideoMedia_Fragment;'PageData_VideoMedia_Fragment': PageData_VideoMedia_Fragment } }
    ) | (
      { __typename?: 'WebsiteFooter' }
      & { ' $fragmentRefs'?: { 'BlockData_WebsiteFooter_Fragment': BlockData_WebsiteFooter_Fragment;'PageData_WebsiteFooter_Fragment': PageData_WebsiteFooter_Fragment } }
    ) | (
      { __typename?: '_Component' }
      & { ' $fragmentRefs'?: { 'BlockData__Component_Fragment': BlockData__Component_Fragment;'PageData__Component_Fragment': PageData__Component_Fragment } }
    ) | (
      { __typename?: '_Content' }
      & { ' $fragmentRefs'?: { 'BlockData__Content_Fragment': BlockData__Content_Fragment;'PageData__Content_Fragment': PageData__Content_Fragment } }
    ) | (
      { __typename?: '_Element' }
      & { ' $fragmentRefs'?: { 'BlockData__Element_Fragment': BlockData__Element_Fragment;'PageData__Element_Fragment': PageData__Element_Fragment } }
    ) | (
      { __typename?: '_Experience' }
      & { ' $fragmentRefs'?: { 'BlockData__Experience_Fragment': BlockData__Experience_Fragment;'PageData__Experience_Fragment': PageData__Experience_Fragment } }
    ) | (
      { __typename?: '_Folder' }
      & { ' $fragmentRefs'?: { 'BlockData__Folder_Fragment': BlockData__Folder_Fragment;'PageData__Folder_Fragment': PageData__Folder_Fragment } }
    ) | (
      { __typename?: '_Image' }
      & { ' $fragmentRefs'?: { 'BlockData__Image_Fragment': BlockData__Image_Fragment;'PageData__Image_Fragment': PageData__Image_Fragment } }
    ) | (
      { __typename?: '_Media' }
      & { ' $fragmentRefs'?: { 'BlockData__Media_Fragment': BlockData__Media_Fragment;'PageData__Media_Fragment': PageData__Media_Fragment } }
    ) | (
      { __typename?: '_Page' }
      & { ' $fragmentRefs'?: { 'BlockData__Page_Fragment': BlockData__Page_Fragment;'PageData__Page_Fragment': PageData__Page_Fragment } }
    ) | (
      { __typename?: '_Section' }
      & { ' $fragmentRefs'?: { 'BlockData__Section_Fragment': BlockData__Section_Fragment;'PageData__Section_Fragment': PageData__Section_Fragment } }
    ) | (
      { __typename?: '_Video' }
      & { ' $fragmentRefs'?: { 'BlockData__Video_Fragment': BlockData__Video_Fragment;'PageData__Video_Fragment': PageData__Video_Fragment } }
    ) | (
      { __typename?: 'hero' }
      & { ' $fragmentRefs'?: { 'BlockData_hero_Fragment': BlockData_hero_Fragment;'PageData_hero_Fragment': PageData_hero_Fragment } }
    ) | (
      { __typename?: 'hero2' }
      & { ' $fragmentRefs'?: { 'BlockData_hero2_Fragment': BlockData_hero2_Fragment;'PageData_hero2_Fragment': PageData_hero2_Fragment } }
    ) | (
      { __typename?: 'hero3' }
      & { ' $fragmentRefs'?: { 'BlockData_hero3_Fragment': BlockData_hero3_Fragment;'PageData_hero3_Fragment': PageData_hero3_Fragment } }
    ) | (
      { __typename?: 'hero4' }
      & { ' $fragmentRefs'?: { 'BlockData_hero4_Fragment': BlockData_hero4_Fragment;'PageData_hero4_Fragment': PageData_hero4_Fragment } }
    ) | (
      { __typename?: 'heroBanner' }
      & { ' $fragmentRefs'?: { 'BlockData_heroBanner_Fragment': BlockData_heroBanner_Fragment;'PageData_heroBanner_Fragment': PageData_heroBanner_Fragment } }
    ) | (
      { __typename?: 'heroBanner2' }
      & { ' $fragmentRefs'?: { 'BlockData_heroBanner2_Fragment': BlockData_heroBanner2_Fragment;'PageData_heroBanner2_Fragment': PageData_heroBanner2_Fragment } }
    ) | (
      { __typename?: 'heroBanner3' }
      & { ' $fragmentRefs'?: { 'BlockData_heroBanner3_Fragment': BlockData_heroBanner3_Fragment;'PageData_heroBanner3_Fragment': PageData_heroBanner3_Fragment } }
    ) | (
      { __typename?: 'heroBanner4' }
      & { ' $fragmentRefs'?: { 'BlockData_heroBanner4_Fragment': BlockData_heroBanner4_Fragment;'PageData_heroBanner4_Fragment': PageData_heroBanner4_Fragment } }
    ) | (
      { __typename?: 'heroBanner5' }
      & { ' $fragmentRefs'?: { 'BlockData_heroBanner5_Fragment': BlockData_heroBanner5_Fragment;'PageData_heroBanner5_Fragment': PageData_heroBanner5_Fragment } }
    ) | (
      { __typename?: 'heroBanner6' }
      & { ' $fragmentRefs'?: { 'BlockData_heroBanner6_Fragment': BlockData_heroBanner6_Fragment;'PageData_heroBanner6_Fragment': PageData_heroBanner6_Fragment } }
    ) | (
      { __typename?: 'necComponent' }
      & { ' $fragmentRefs'?: { 'BlockData_necComponent_Fragment': BlockData_necComponent_Fragment;'PageData_necComponent_Fragment': PageData_necComponent_Fragment } }
    ) | (
      { __typename?: 'newEelem' }
      & { ' $fragmentRefs'?: { 'BlockData_newEelem_Fragment': BlockData_newEelem_Fragment;'PageData_newEelem_Fragment': PageData_newEelem_Fragment } }
    ) | null> | null } | null };

export type getContentByPathQueryVariables = Exact<{
  path: Scalars['String']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<Array<Locales> | Locales>;
  domain?: InputMaybe<Scalars['String']['input']>;
}>;


export type getContentByPathQuery = { __typename?: 'Query', content?: { __typename?: '_ContentOutput', total?: number | null, items?: Array<(
      { __typename?: 'AIFreePrompt' }
      & { ' $fragmentRefs'?: { 'PageData_AIFreePrompt_Fragment': PageData_AIFreePrompt_Fragment } }
    ) | (
      { __typename?: 'AIPersonalizedPrompt' }
      & { ' $fragmentRefs'?: { 'PageData_AIPersonalizedPrompt_Fragment': PageData_AIPersonalizedPrompt_Fragment } }
    ) | (
      { __typename?: 'AnotherSearch' }
      & { ' $fragmentRefs'?: { 'PageData_AnotherSearch_Fragment': PageData_AnotherSearch_Fragment } }
    ) | (
      { __typename?: 'ArticleGroupPage' }
      & { ' $fragmentRefs'?: { 'PageData_ArticleGroupPage_Fragment': PageData_ArticleGroupPage_Fragment } }
    ) | (
      { __typename?: 'ArticleListElement' }
      & { ' $fragmentRefs'?: { 'PageData_ArticleListElement_Fragment': PageData_ArticleListElement_Fragment } }
    ) | (
      { __typename?: 'ArticlePage' }
      & { ' $fragmentRefs'?: { 'PageData_ArticlePage_Fragment': PageData_ArticlePage_Fragment } }
    ) | (
      { __typename?: 'BannerBlock' }
      & { ' $fragmentRefs'?: { 'PageData_BannerBlock_Fragment': PageData_BannerBlock_Fragment } }
    ) | (
      { __typename?: 'BlankExperience' }
      & { ' $fragmentRefs'?: { 'PageData_BlankExperience_Fragment': PageData_BlankExperience_Fragment } }
    ) | (
      { __typename?: 'BlankSection' }
      & { ' $fragmentRefs'?: { 'PageData_BlankSection_Fragment': PageData_BlankSection_Fragment } }
    ) | (
      { __typename?: 'BlockTest' }
      & { ' $fragmentRefs'?: { 'PageData_BlockTest_Fragment': PageData_BlockTest_Fragment } }
    ) | (
      { __typename?: 'ButtonBlock' }
      & { ' $fragmentRefs'?: { 'PageData_ButtonBlock_Fragment': PageData_ButtonBlock_Fragment } }
    ) | (
      { __typename?: 'CTAElement' }
      & { ' $fragmentRefs'?: { 'PageData_CTAElement_Fragment': PageData_CTAElement_Fragment } }
    ) | (
      { __typename?: 'CardBlock' }
      & { ' $fragmentRefs'?: { 'PageData_CardBlock_Fragment': PageData_CardBlock_Fragment } }
    ) | (
      { __typename?: 'DefaultImage' }
      & { ' $fragmentRefs'?: { 'PageData_DefaultImage_Fragment': PageData_DefaultImage_Fragment } }
    ) | (
      { __typename?: 'DefaultVideo' }
      & { ' $fragmentRefs'?: { 'PageData_DefaultVideo_Fragment': PageData_DefaultVideo_Fragment } }
    ) | (
      { __typename?: 'Dictionary' }
      & { ' $fragmentRefs'?: { 'PageData_Dictionary_Fragment': PageData_Dictionary_Fragment } }
    ) | (
      { __typename?: 'DictionaryItem' }
      & { ' $fragmentRefs'?: { 'PageData_DictionaryItem_Fragment': PageData_DictionaryItem_Fragment } }
    ) | (
      { __typename?: 'FoodSuggestionItem' }
      & { ' $fragmentRefs'?: { 'PageData_FoodSuggestionItem_Fragment': PageData_FoodSuggestionItem_Fragment } }
    ) | (
      { __typename?: 'FoodSuggestionItemBlock' }
      & { ' $fragmentRefs'?: { 'PageData_FoodSuggestionItemBlock_Fragment': PageData_FoodSuggestionItemBlock_Fragment } }
    ) | (
      { __typename?: 'GenericMedia' }
      & { ' $fragmentRefs'?: { 'PageData_GenericMedia_Fragment': PageData_GenericMedia_Fragment } }
    ) | (
      { __typename?: 'HeaderBlock' }
      & { ' $fragmentRefs'?: { 'PageData_HeaderBlock_Fragment': PageData_HeaderBlock_Fragment } }
    ) | (
      { __typename?: 'HeadingElement' }
      & { ' $fragmentRefs'?: { 'PageData_HeadingElement_Fragment': PageData_HeadingElement_Fragment } }
    ) | (
      { __typename?: 'Image' }
      & { ' $fragmentRefs'?: { 'PageData_Image_Fragment': PageData_Image_Fragment } }
    ) | (
      { __typename?: 'ImageElement' }
      & { ' $fragmentRefs'?: { 'PageData_ImageElement_Fragment': PageData_ImageElement_Fragment } }
    ) | (
      { __typename?: 'ImageMedia' }
      & { ' $fragmentRefs'?: { 'PageData_ImageMedia_Fragment': PageData_ImageMedia_Fragment } }
    ) | (
      { __typename?: 'MegaMenuGroupBlock' }
      & { ' $fragmentRefs'?: { 'PageData_MegaMenuGroupBlock_Fragment': PageData_MegaMenuGroupBlock_Fragment } }
    ) | (
      { __typename?: 'NavigationMenuBlock' }
      & { ' $fragmentRefs'?: { 'PageData_NavigationMenuBlock_Fragment': PageData_NavigationMenuBlock_Fragment } }
    ) | (
      { __typename?: 'NewDemopage' }
      & { ' $fragmentRefs'?: { 'PageData_NewDemopage_Fragment': PageData_NewDemopage_Fragment } }
    ) | (
      { __typename?: 'OfficeLocation' }
      & { ' $fragmentRefs'?: { 'PageData_OfficeLocation_Fragment': PageData_OfficeLocation_Fragment } }
    ) | (
      { __typename?: 'PageSeoSettings' }
      & { ' $fragmentRefs'?: { 'PageData_PageSeoSettings_Fragment': PageData_PageSeoSettings_Fragment } }
    ) | (
      { __typename?: 'PagecreatedforSaaSEvaluation' }
      & { ' $fragmentRefs'?: { 'PageData_PagecreatedforSaaSEvaluation_Fragment': PageData_PagecreatedforSaaSEvaluation_Fragment } }
    ) | (
      { __typename?: 'ParagraphElement' }
      & { ' $fragmentRefs'?: { 'PageData_ParagraphElement_Fragment': PageData_ParagraphElement_Fragment } }
    ) | (
      { __typename?: 'SearchPage' }
      & { ' $fragmentRefs'?: { 'PageData_SearchPage_Fragment': PageData_SearchPage_Fragment } }
    ) | (
      { __typename?: 'SysContentFolder' }
      & { ' $fragmentRefs'?: { 'PageData_SysContentFolder_Fragment': PageData_SysContentFolder_Fragment } }
    ) | (
      { __typename?: 'TestContent' }
      & { ' $fragmentRefs'?: { 'PageData_TestContent_Fragment': PageData_TestContent_Fragment } }
    ) | (
      { __typename?: 'TestimonialElement' }
      & { ' $fragmentRefs'?: { 'PageData_TestimonialElement_Fragment': PageData_TestimonialElement_Fragment } }
    ) | (
      { __typename?: 'Video' }
      & { ' $fragmentRefs'?: { 'PageData_Video_Fragment': PageData_Video_Fragment } }
    ) | (
      { __typename?: 'VideoMedia' }
      & { ' $fragmentRefs'?: { 'PageData_VideoMedia_Fragment': PageData_VideoMedia_Fragment } }
    ) | (
      { __typename?: 'WebsiteFooter' }
      & { ' $fragmentRefs'?: { 'PageData_WebsiteFooter_Fragment': PageData_WebsiteFooter_Fragment } }
    ) | (
      { __typename?: '_Component' }
      & { ' $fragmentRefs'?: { 'PageData__Component_Fragment': PageData__Component_Fragment } }
    ) | (
      { __typename?: '_Content' }
      & { ' $fragmentRefs'?: { 'PageData__Content_Fragment': PageData__Content_Fragment } }
    ) | (
      { __typename?: '_Element' }
      & { ' $fragmentRefs'?: { 'PageData__Element_Fragment': PageData__Element_Fragment } }
    ) | (
      { __typename?: '_Experience' }
      & { ' $fragmentRefs'?: { 'PageData__Experience_Fragment': PageData__Experience_Fragment } }
    ) | (
      { __typename?: '_Folder' }
      & { ' $fragmentRefs'?: { 'PageData__Folder_Fragment': PageData__Folder_Fragment } }
    ) | (
      { __typename?: '_Image' }
      & { ' $fragmentRefs'?: { 'PageData__Image_Fragment': PageData__Image_Fragment } }
    ) | (
      { __typename?: '_Media' }
      & { ' $fragmentRefs'?: { 'PageData__Media_Fragment': PageData__Media_Fragment } }
    ) | (
      { __typename?: '_Page' }
      & { ' $fragmentRefs'?: { 'PageData__Page_Fragment': PageData__Page_Fragment } }
    ) | (
      { __typename?: '_Section' }
      & { ' $fragmentRefs'?: { 'PageData__Section_Fragment': PageData__Section_Fragment } }
    ) | (
      { __typename?: '_Video' }
      & { ' $fragmentRefs'?: { 'PageData__Video_Fragment': PageData__Video_Fragment } }
    ) | (
      { __typename?: 'hero' }
      & { ' $fragmentRefs'?: { 'PageData_hero_Fragment': PageData_hero_Fragment } }
    ) | (
      { __typename?: 'hero2' }
      & { ' $fragmentRefs'?: { 'PageData_hero2_Fragment': PageData_hero2_Fragment } }
    ) | (
      { __typename?: 'hero3' }
      & { ' $fragmentRefs'?: { 'PageData_hero3_Fragment': PageData_hero3_Fragment } }
    ) | (
      { __typename?: 'hero4' }
      & { ' $fragmentRefs'?: { 'PageData_hero4_Fragment': PageData_hero4_Fragment } }
    ) | (
      { __typename?: 'heroBanner' }
      & { ' $fragmentRefs'?: { 'PageData_heroBanner_Fragment': PageData_heroBanner_Fragment } }
    ) | (
      { __typename?: 'heroBanner2' }
      & { ' $fragmentRefs'?: { 'PageData_heroBanner2_Fragment': PageData_heroBanner2_Fragment } }
    ) | (
      { __typename?: 'heroBanner3' }
      & { ' $fragmentRefs'?: { 'PageData_heroBanner3_Fragment': PageData_heroBanner3_Fragment } }
    ) | (
      { __typename?: 'heroBanner4' }
      & { ' $fragmentRefs'?: { 'PageData_heroBanner4_Fragment': PageData_heroBanner4_Fragment } }
    ) | (
      { __typename?: 'heroBanner5' }
      & { ' $fragmentRefs'?: { 'PageData_heroBanner5_Fragment': PageData_heroBanner5_Fragment } }
    ) | (
      { __typename?: 'heroBanner6' }
      & { ' $fragmentRefs'?: { 'PageData_heroBanner6_Fragment': PageData_heroBanner6_Fragment } }
    ) | (
      { __typename?: 'necComponent' }
      & { ' $fragmentRefs'?: { 'PageData_necComponent_Fragment': PageData_necComponent_Fragment } }
    ) | (
      { __typename?: 'newEelem' }
      & { ' $fragmentRefs'?: { 'PageData_newEelem_Fragment': PageData_newEelem_Fragment } }
    ) | null> | null } | null };

export type LinkDataFragment = { __typename?: 'ContentUrl', base?: string | null, hierarchical?: string | null, default?: string | null } & { ' $fragmentName'?: 'LinkDataFragment' };

type IContentData_AIFreePrompt_Fragment = { __typename?: 'AIFreePrompt', _type: 'AIFreePrompt', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_AIFreePrompt_Fragment' };

type IContentData_AIPersonalizedPrompt_Fragment = { __typename?: 'AIPersonalizedPrompt', _type: 'AIPersonalizedPrompt', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_AIPersonalizedPrompt_Fragment' };

type IContentData_AnotherSearch_Fragment = { __typename?: 'AnotherSearch', _type: 'AnotherSearch', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_AnotherSearch_Fragment' };

type IContentData_ArticleGroupPage_Fragment = { __typename?: 'ArticleGroupPage', _type: 'ArticleGroupPage', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_ArticleGroupPage_Fragment' };

type IContentData_ArticleListElement_Fragment = { __typename?: 'ArticleListElement', _type: 'ArticleListElement', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_ArticleListElement_Fragment' };

type IContentData_ArticlePage_Fragment = { __typename?: 'ArticlePage', _type: 'ArticlePage', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_ArticlePage_Fragment' };

type IContentData_BannerBlock_Fragment = { __typename?: 'BannerBlock', _type: 'BannerBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_BannerBlock_Fragment' };

type IContentData_BlankExperience_Fragment = { __typename?: 'BlankExperience', _type: 'BlankExperience', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_BlankExperience_Fragment' };

type IContentData_BlankSection_Fragment = { __typename?: 'BlankSection', _type: 'BlankSection', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_BlankSection_Fragment' };

type IContentData_BlockTest_Fragment = { __typename?: 'BlockTest', _type: 'BlockTest', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_BlockTest_Fragment' };

type IContentData_ButtonBlock_Fragment = { __typename?: 'ButtonBlock', _type: 'ButtonBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_ButtonBlock_Fragment' };

type IContentData_CTAElement_Fragment = { __typename?: 'CTAElement', _type: 'CTAElement', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_CTAElement_Fragment' };

type IContentData_CardBlock_Fragment = { __typename?: 'CardBlock', _type: 'CardBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_CardBlock_Fragment' };

type IContentData_DefaultImage_Fragment = { __typename?: 'DefaultImage', _type: 'DefaultImage', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_DefaultImage_Fragment' };

type IContentData_DefaultVideo_Fragment = { __typename?: 'DefaultVideo', _type: 'DefaultVideo', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_DefaultVideo_Fragment' };

type IContentData_Dictionary_Fragment = { __typename?: 'Dictionary', _type: 'Dictionary', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_Dictionary_Fragment' };

type IContentData_DictionaryItem_Fragment = { __typename?: 'DictionaryItem', _type: 'DictionaryItem', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_DictionaryItem_Fragment' };

type IContentData_FoodSuggestionItem_Fragment = { __typename?: 'FoodSuggestionItem', _type: 'FoodSuggestionItem', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_FoodSuggestionItem_Fragment' };

type IContentData_FoodSuggestionItemBlock_Fragment = { __typename?: 'FoodSuggestionItemBlock', _type: 'FoodSuggestionItemBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_FoodSuggestionItemBlock_Fragment' };

type IContentData_GenericMedia_Fragment = { __typename?: 'GenericMedia', _type: 'GenericMedia', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_GenericMedia_Fragment' };

type IContentData_HeaderBlock_Fragment = { __typename?: 'HeaderBlock', _type: 'HeaderBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_HeaderBlock_Fragment' };

type IContentData_HeadingElement_Fragment = { __typename?: 'HeadingElement', _type: 'HeadingElement', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_HeadingElement_Fragment' };

type IContentData_Image_Fragment = { __typename?: 'Image', _type: 'Image', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_Image_Fragment' };

type IContentData_ImageElement_Fragment = { __typename?: 'ImageElement', _type: 'ImageElement', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_ImageElement_Fragment' };

type IContentData_ImageMedia_Fragment = { __typename?: 'ImageMedia', _type: 'ImageMedia', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_ImageMedia_Fragment' };

type IContentData_MegaMenuGroupBlock_Fragment = { __typename?: 'MegaMenuGroupBlock', _type: 'MegaMenuGroupBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_MegaMenuGroupBlock_Fragment' };

type IContentData_NavigationMenuBlock_Fragment = { __typename?: 'NavigationMenuBlock', _type: 'NavigationMenuBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_NavigationMenuBlock_Fragment' };

type IContentData_NewDemopage_Fragment = { __typename?: 'NewDemopage', _type: 'NewDemopage', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_NewDemopage_Fragment' };

type IContentData_OfficeLocation_Fragment = { __typename?: 'OfficeLocation', _type: 'OfficeLocation', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_OfficeLocation_Fragment' };

type IContentData_PageSeoSettings_Fragment = { __typename?: 'PageSeoSettings', _type: 'PageSeoSettings', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_PageSeoSettings_Fragment' };

type IContentData_PagecreatedforSaaSEvaluation_Fragment = { __typename?: 'PagecreatedforSaaSEvaluation', _type: 'PagecreatedforSaaSEvaluation', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_PagecreatedforSaaSEvaluation_Fragment' };

type IContentData_ParagraphElement_Fragment = { __typename?: 'ParagraphElement', _type: 'ParagraphElement', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_ParagraphElement_Fragment' };

type IContentData_SearchPage_Fragment = { __typename?: 'SearchPage', _type: 'SearchPage', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_SearchPage_Fragment' };

type IContentData_SysContentFolder_Fragment = { __typename?: 'SysContentFolder', _type: 'SysContentFolder', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_SysContentFolder_Fragment' };

type IContentData_TestContent_Fragment = { __typename?: 'TestContent', _type: 'TestContent', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_TestContent_Fragment' };

type IContentData_TestimonialElement_Fragment = { __typename?: 'TestimonialElement', _type: 'TestimonialElement', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_TestimonialElement_Fragment' };

type IContentData_Video_Fragment = { __typename?: 'Video', _type: 'Video', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_Video_Fragment' };

type IContentData_VideoMedia_Fragment = { __typename?: 'VideoMedia', _type: 'VideoMedia', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_VideoMedia_Fragment' };

type IContentData_WebsiteFooter_Fragment = { __typename?: 'WebsiteFooter', _type: 'WebsiteFooter', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_WebsiteFooter_Fragment' };

type IContentData__Component_Fragment = { __typename?: '_Component', _type: '_Component', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData__Component_Fragment' };

type IContentData__Content_Fragment = { __typename?: '_Content', _type: '_Content', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData__Content_Fragment' };

type IContentData__Element_Fragment = { __typename?: '_Element', _type: '_Element', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData__Element_Fragment' };

type IContentData__Experience_Fragment = { __typename?: '_Experience', _type: '_Experience', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData__Experience_Fragment' };

type IContentData__Folder_Fragment = { __typename?: '_Folder', _type: '_Folder', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData__Folder_Fragment' };

type IContentData__Image_Fragment = { __typename?: '_Image', _type: '_Image', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData__Image_Fragment' };

type IContentData__Media_Fragment = { __typename?: '_Media', _type: '_Media', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData__Media_Fragment' };

type IContentData__Page_Fragment = { __typename?: '_Page', _type: '_Page', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData__Page_Fragment' };

type IContentData__Section_Fragment = { __typename?: '_Section', _type: '_Section', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData__Section_Fragment' };

type IContentData__Video_Fragment = { __typename?: '_Video', _type: '_Video', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData__Video_Fragment' };

type IContentData_hero_Fragment = { __typename?: 'hero', _type: 'hero', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_hero_Fragment' };

type IContentData_hero2_Fragment = { __typename?: 'hero2', _type: 'hero2', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_hero2_Fragment' };

type IContentData_hero3_Fragment = { __typename?: 'hero3', _type: 'hero3', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_hero3_Fragment' };

type IContentData_hero4_Fragment = { __typename?: 'hero4', _type: 'hero4', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_hero4_Fragment' };

type IContentData_heroBanner_Fragment = { __typename?: 'heroBanner', _type: 'heroBanner', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_heroBanner_Fragment' };

type IContentData_heroBanner2_Fragment = { __typename?: 'heroBanner2', _type: 'heroBanner2', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_heroBanner2_Fragment' };

type IContentData_heroBanner3_Fragment = { __typename?: 'heroBanner3', _type: 'heroBanner3', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_heroBanner3_Fragment' };

type IContentData_heroBanner4_Fragment = { __typename?: 'heroBanner4', _type: 'heroBanner4', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_heroBanner4_Fragment' };

type IContentData_heroBanner5_Fragment = { __typename?: 'heroBanner5', _type: 'heroBanner5', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_heroBanner5_Fragment' };

type IContentData_heroBanner6_Fragment = { __typename?: 'heroBanner6', _type: 'heroBanner6', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_heroBanner6_Fragment' };

type IContentData_necComponent_Fragment = { __typename?: 'necComponent', _type: 'necComponent', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_necComponent_Fragment' };

type IContentData_newEelem_Fragment = { __typename?: 'newEelem', _type: 'newEelem', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_newEelem_Fragment' };

export type IContentDataFragment = IContentData_AIFreePrompt_Fragment | IContentData_AIPersonalizedPrompt_Fragment | IContentData_AnotherSearch_Fragment | IContentData_ArticleGroupPage_Fragment | IContentData_ArticleListElement_Fragment | IContentData_ArticlePage_Fragment | IContentData_BannerBlock_Fragment | IContentData_BlankExperience_Fragment | IContentData_BlankSection_Fragment | IContentData_BlockTest_Fragment | IContentData_ButtonBlock_Fragment | IContentData_CTAElement_Fragment | IContentData_CardBlock_Fragment | IContentData_DefaultImage_Fragment | IContentData_DefaultVideo_Fragment | IContentData_Dictionary_Fragment | IContentData_DictionaryItem_Fragment | IContentData_FoodSuggestionItem_Fragment | IContentData_FoodSuggestionItemBlock_Fragment | IContentData_GenericMedia_Fragment | IContentData_HeaderBlock_Fragment | IContentData_HeadingElement_Fragment | IContentData_Image_Fragment | IContentData_ImageElement_Fragment | IContentData_ImageMedia_Fragment | IContentData_MegaMenuGroupBlock_Fragment | IContentData_NavigationMenuBlock_Fragment | IContentData_NewDemopage_Fragment | IContentData_OfficeLocation_Fragment | IContentData_PageSeoSettings_Fragment | IContentData_PagecreatedforSaaSEvaluation_Fragment | IContentData_ParagraphElement_Fragment | IContentData_SearchPage_Fragment | IContentData_SysContentFolder_Fragment | IContentData_TestContent_Fragment | IContentData_TestimonialElement_Fragment | IContentData_Video_Fragment | IContentData_VideoMedia_Fragment | IContentData_WebsiteFooter_Fragment | IContentData__Component_Fragment | IContentData__Content_Fragment | IContentData__Element_Fragment | IContentData__Experience_Fragment | IContentData__Folder_Fragment | IContentData__Image_Fragment | IContentData__Media_Fragment | IContentData__Page_Fragment | IContentData__Section_Fragment | IContentData__Video_Fragment | IContentData_hero_Fragment | IContentData_hero2_Fragment | IContentData_hero3_Fragment | IContentData_hero4_Fragment | IContentData_heroBanner_Fragment | IContentData_heroBanner2_Fragment | IContentData_heroBanner3_Fragment | IContentData_heroBanner4_Fragment | IContentData_heroBanner5_Fragment | IContentData_heroBanner6_Fragment | IContentData_necComponent_Fragment | IContentData_newEelem_Fragment;

export const LinkDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}}]} as unknown as DocumentNode<LinkDataFragment, unknown>;
export const LinkItemDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Link"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}}]} as unknown as DocumentNode<LinkItemDataFragment, unknown>;
export const MenuContentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuContent"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NavigationMenuBlockProperty"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"heading"},"name":{"kind":"Name","value":"MenuNavigationHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"links"},"name":{"kind":"Name","value":"NavigationLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkItemData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Link"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}}]} as unknown as DocumentNode<MenuContentFragment, unknown>;
export const IContentInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}}]} as unknown as DocumentNode<IContentInfoFragment, unknown>;
export const IContentDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}}]} as unknown as DocumentNode<IContentDataFragment, unknown>;
export const IContentListItemFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentListItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}}]} as unknown as DocumentNode<IContentListItemFragment, unknown>;
export const IElementDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}}]} as unknown as DocumentNode<IElementDataFragment, unknown>;
export const ArticleListElementDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArticleListElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ArticleListElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"articleListCount"}}]}}]} as unknown as DocumentNode<ArticleListElementDataFragment, unknown>;
export const CTAElementDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CTAElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CTAElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"text"},"name":{"kind":"Name","value":"Text"}},{"kind":"Field","alias":{"kind":"Name","value":"link"},"name":{"kind":"Name","value":"Link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}}]} as unknown as DocumentNode<CTAElementDataFragment, unknown>;
export const HeadingElementDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeadingElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HeadingElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"headingText"}},{"kind":"Field","name":{"kind":"Name","value":"AIPrompt"}}]}}]} as unknown as DocumentNode<HeadingElementDataFragment, unknown>;
export const ReferenceDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReferenceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}}]} as unknown as DocumentNode<ReferenceDataFragment, unknown>;
export const ImageElementDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"imageLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReferenceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}}]} as unknown as DocumentNode<ImageElementDataFragment, unknown>;
export const ParagraphElementDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ParagraphElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ParagraphElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"paragraph"},"name":{"kind":"Name","value":"text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}}]}}]} as unknown as DocumentNode<ParagraphElementDataFragment, unknown>;
export const TestimonialElementDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TestimonialElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TestimonialElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"referenceTitle"}},{"kind":"Field","name":{"kind":"Name","value":"referenceText"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"customerName"}},{"kind":"Field","name":{"kind":"Name","value":"customerLocation"}},{"kind":"Field","name":{"kind":"Name","value":"customerImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReferenceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}}]} as unknown as DocumentNode<TestimonialElementDataFragment, unknown>;
export const ElementDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ArticleListElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CTAElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeadingElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ParagraphElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialElementData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReferenceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArticleListElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ArticleListElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"articleListCount"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CTAElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CTAElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"text"},"name":{"kind":"Name","value":"Text"}},{"kind":"Field","alias":{"kind":"Name","value":"link"},"name":{"kind":"Name","value":"Link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeadingElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HeadingElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"headingText"}},{"kind":"Field","name":{"kind":"Name","value":"AIPrompt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"imageLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ParagraphElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ParagraphElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"paragraph"},"name":{"kind":"Name","value":"text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TestimonialElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TestimonialElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"referenceTitle"}},{"kind":"Field","name":{"kind":"Name","value":"referenceText"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"customerName"}},{"kind":"Field","name":{"kind":"Name","value":"customerLocation"}},{"kind":"Field","name":{"kind":"Name","value":"customerImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}}]}}]} as unknown as DocumentNode<ElementDataFragment, unknown>;
export const CompositionDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompositionData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"displayName"}},{"kind":"Field","alias":{"kind":"Name","value":"layoutType"},"name":{"kind":"Name","value":"nodeType"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","alias":{"kind":"Name","value":"template"},"name":{"kind":"Name","value":"displayTemplateKey"}},{"kind":"Field","alias":{"kind":"Name","value":"settings"},"name":{"kind":"Name","value":"displaySettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionStructureNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"recursive"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"depth"},"value":{"kind":"IntValue","value":"10"}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"displayName"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionElementNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"element"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ElementData"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArticleListElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ArticleListElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"articleListCount"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CTAElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CTAElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"text"},"name":{"kind":"Name","value":"Text"}},{"kind":"Field","alias":{"kind":"Name","value":"link"},"name":{"kind":"Name","value":"Link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeadingElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HeadingElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"headingText"}},{"kind":"Field","name":{"kind":"Name","value":"AIPrompt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReferenceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"imageLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ParagraphElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ParagraphElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"paragraph"},"name":{"kind":"Name","value":"text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TestimonialElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TestimonialElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"referenceTitle"}},{"kind":"Field","name":{"kind":"Name","value":"referenceText"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"customerName"}},{"kind":"Field","name":{"kind":"Name","value":"customerLocation"}},{"kind":"Field","name":{"kind":"Name","value":"customerImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ArticleListElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CTAElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeadingElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ParagraphElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialElementData"}}]}}]} as unknown as DocumentNode<CompositionDataFragment, unknown>;
export const ExperienceDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ExperienceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IExperience"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"composition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompositionData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArticleListElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ArticleListElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"articleListCount"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CTAElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CTAElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"text"},"name":{"kind":"Name","value":"Text"}},{"kind":"Field","alias":{"kind":"Name","value":"link"},"name":{"kind":"Name","value":"Link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeadingElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HeadingElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"headingText"}},{"kind":"Field","name":{"kind":"Name","value":"AIPrompt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReferenceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"imageLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ParagraphElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ParagraphElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"paragraph"},"name":{"kind":"Name","value":"text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TestimonialElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TestimonialElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"referenceTitle"}},{"kind":"Field","name":{"kind":"Name","value":"referenceText"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"customerName"}},{"kind":"Field","name":{"kind":"Name","value":"customerLocation"}},{"kind":"Field","name":{"kind":"Name","value":"customerImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ArticleListElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CTAElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeadingElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ParagraphElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialElementData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompositionData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"displayName"}},{"kind":"Field","alias":{"kind":"Name","value":"layoutType"},"name":{"kind":"Name","value":"nodeType"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","alias":{"kind":"Name","value":"template"},"name":{"kind":"Name","value":"displayTemplateKey"}},{"kind":"Field","alias":{"kind":"Name","value":"settings"},"name":{"kind":"Name","value":"displaySettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionStructureNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"recursive"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"depth"},"value":{"kind":"IntValue","value":"10"}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"displayName"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionElementNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"element"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ElementData"}}]}}]}}]}}]} as unknown as DocumentNode<ExperienceDataFragment, unknown>;
export const BlankExperienceDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlankExperienceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BlankExperience"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ExperienceData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArticleListElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ArticleListElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"articleListCount"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CTAElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CTAElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"text"},"name":{"kind":"Name","value":"Text"}},{"kind":"Field","alias":{"kind":"Name","value":"link"},"name":{"kind":"Name","value":"Link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeadingElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HeadingElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"headingText"}},{"kind":"Field","name":{"kind":"Name","value":"AIPrompt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReferenceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"imageLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ParagraphElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ParagraphElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"paragraph"},"name":{"kind":"Name","value":"text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TestimonialElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TestimonialElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"referenceTitle"}},{"kind":"Field","name":{"kind":"Name","value":"referenceText"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"customerName"}},{"kind":"Field","name":{"kind":"Name","value":"customerLocation"}},{"kind":"Field","name":{"kind":"Name","value":"customerImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ArticleListElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CTAElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeadingElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ParagraphElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialElementData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompositionData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"displayName"}},{"kind":"Field","alias":{"kind":"Name","value":"layoutType"},"name":{"kind":"Name","value":"nodeType"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","alias":{"kind":"Name","value":"template"},"name":{"kind":"Name","value":"displayTemplateKey"}},{"kind":"Field","alias":{"kind":"Name","value":"settings"},"name":{"kind":"Name","value":"displaySettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionStructureNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"recursive"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"depth"},"value":{"kind":"IntValue","value":"10"}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"displayName"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionElementNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"element"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ElementData"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ExperienceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IExperience"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"composition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompositionData"}}]}}]}}]} as unknown as DocumentNode<BlankExperienceDataFragment, unknown>;
export const ButtonBlockPropertyDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonBlockPropertyData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonBlockProperty"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"className"}},{"kind":"Field","name":{"kind":"Name","value":"buttonType"}},{"kind":"Field","name":{"kind":"Name","value":"variant"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}}]} as unknown as DocumentNode<ButtonBlockPropertyDataFragment, unknown>;
export const CardBlockDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CardBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"heading"},"name":{"kind":"Name","value":"CardHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"subheading"},"name":{"kind":"Name","value":"CardSubheading"}},{"kind":"Field","alias":{"kind":"Name","value":"description"},"name":{"kind":"Name","value":"CardDescription"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"icon"},"name":{"kind":"Name","value":"CardIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"image"},"name":{"kind":"Name","value":"CardImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"link"},"name":{"kind":"Name","value":"CardButton"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonBlockPropertyData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"color"},"name":{"kind":"Name","value":"CardColor"}},{"kind":"Field","alias":{"kind":"Name","value":"layout"},"name":{"kind":"Name","value":"CardImageLayout"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReferenceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonBlockPropertyData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonBlockProperty"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"className"}},{"kind":"Field","name":{"kind":"Name","value":"buttonType"}},{"kind":"Field","name":{"kind":"Name","value":"variant"}}]}}]} as unknown as DocumentNode<CardBlockDataFragment, unknown>;
export const OfficeLocationDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OfficeLocationData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OfficeLocation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"OfficeTitle"}},{"kind":"Field","alias":{"kind":"Name","value":"street1"},"name":{"kind":"Name","value":"OfficeAddressStreet1"}},{"kind":"Field","alias":{"kind":"Name","value":"street2"},"name":{"kind":"Name","value":"OfficeAddressStreet2"}},{"kind":"Field","alias":{"kind":"Name","value":"postalcode"},"name":{"kind":"Name","value":"OfficeAddressPostalCode"}},{"kind":"Field","alias":{"kind":"Name","value":"city"},"name":{"kind":"Name","value":"OfficeAddressCity"}},{"kind":"Field","alias":{"kind":"Name","value":"country"},"name":{"kind":"Name","value":"OfficeAddressCountry"}},{"kind":"Field","alias":{"kind":"Name","value":"phone"},"name":{"kind":"Name","value":"OfficePhone"}},{"kind":"Field","alias":{"kind":"Name","value":"email"},"name":{"kind":"Name","value":"OfficeEmail"}}]}}]} as unknown as DocumentNode<OfficeLocationDataFragment, unknown>;
export const ButtonBlockDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"className"}},{"kind":"Field","name":{"kind":"Name","value":"buttonType"}},{"kind":"Field","name":{"kind":"Name","value":"variant"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}}]} as unknown as DocumentNode<ButtonBlockDataFragment, unknown>;
export const NavigationMenuBlockDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NavigationMenuBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NavigationMenuBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"MenuNavigationHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"items"},"name":{"kind":"Name","value":"NavigationLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkItemData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Link"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}}]} as unknown as DocumentNode<NavigationMenuBlockDataFragment, unknown>;
export const MegaMenuGroupBlockDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MegaMenuGroupBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MegaMenuGroupBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"menuName"},"name":{"kind":"Name","value":"MenuMenuHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"menuLink"},"name":{"kind":"Name","value":"MegaMenuUrl"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"menuData"},"name":{"kind":"Name","value":"MegaMenuContentArea"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavigationMenuBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardBlockData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Link"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReferenceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonBlockPropertyData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonBlockProperty"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"className"}},{"kind":"Field","name":{"kind":"Name","value":"buttonType"}},{"kind":"Field","name":{"kind":"Name","value":"variant"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NavigationMenuBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NavigationMenuBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"MenuNavigationHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"items"},"name":{"kind":"Name","value":"NavigationLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkItemData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CardBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"heading"},"name":{"kind":"Name","value":"CardHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"subheading"},"name":{"kind":"Name","value":"CardSubheading"}},{"kind":"Field","alias":{"kind":"Name","value":"description"},"name":{"kind":"Name","value":"CardDescription"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"icon"},"name":{"kind":"Name","value":"CardIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"image"},"name":{"kind":"Name","value":"CardImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"link"},"name":{"kind":"Name","value":"CardButton"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonBlockPropertyData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"color"},"name":{"kind":"Name","value":"CardColor"}},{"kind":"Field","alias":{"kind":"Name","value":"layout"},"name":{"kind":"Name","value":"CardImageLayout"}}]}}]} as unknown as DocumentNode<MegaMenuGroupBlockDataFragment, unknown>;
export const BlockDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OfficeLocationData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MegaMenuGroupBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavigationMenuBlockData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReferenceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonBlockPropertyData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonBlockProperty"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"className"}},{"kind":"Field","name":{"kind":"Name","value":"buttonType"}},{"kind":"Field","name":{"kind":"Name","value":"variant"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Link"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NavigationMenuBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NavigationMenuBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"MenuNavigationHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"items"},"name":{"kind":"Name","value":"NavigationLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkItemData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CardBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"heading"},"name":{"kind":"Name","value":"CardHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"subheading"},"name":{"kind":"Name","value":"CardSubheading"}},{"kind":"Field","alias":{"kind":"Name","value":"description"},"name":{"kind":"Name","value":"CardDescription"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"icon"},"name":{"kind":"Name","value":"CardIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"image"},"name":{"kind":"Name","value":"CardImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"link"},"name":{"kind":"Name","value":"CardButton"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonBlockPropertyData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"color"},"name":{"kind":"Name","value":"CardColor"}},{"kind":"Field","alias":{"kind":"Name","value":"layout"},"name":{"kind":"Name","value":"CardImageLayout"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OfficeLocationData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OfficeLocation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"OfficeTitle"}},{"kind":"Field","alias":{"kind":"Name","value":"street1"},"name":{"kind":"Name","value":"OfficeAddressStreet1"}},{"kind":"Field","alias":{"kind":"Name","value":"street2"},"name":{"kind":"Name","value":"OfficeAddressStreet2"}},{"kind":"Field","alias":{"kind":"Name","value":"postalcode"},"name":{"kind":"Name","value":"OfficeAddressPostalCode"}},{"kind":"Field","alias":{"kind":"Name","value":"city"},"name":{"kind":"Name","value":"OfficeAddressCity"}},{"kind":"Field","alias":{"kind":"Name","value":"country"},"name":{"kind":"Name","value":"OfficeAddressCountry"}},{"kind":"Field","alias":{"kind":"Name","value":"phone"},"name":{"kind":"Name","value":"OfficePhone"}},{"kind":"Field","alias":{"kind":"Name","value":"email"},"name":{"kind":"Name","value":"OfficeEmail"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"className"}},{"kind":"Field","name":{"kind":"Name","value":"buttonType"}},{"kind":"Field","name":{"kind":"Name","value":"variant"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MegaMenuGroupBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MegaMenuGroupBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"menuName"},"name":{"kind":"Name","value":"MenuMenuHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"menuLink"},"name":{"kind":"Name","value":"MegaMenuUrl"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"menuData"},"name":{"kind":"Name","value":"MegaMenuContentArea"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavigationMenuBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardBlockData"}}]}}]}}]} as unknown as DocumentNode<BlockDataFragment, unknown>;
export const ArticleGroupPageDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArticleGroupPageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ArticleGroupPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"articleGroupTitle"}},{"kind":"Field","name":{"kind":"Name","value":"articleGroupIntro"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"MainContent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReferenceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonBlockPropertyData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonBlockProperty"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"className"}},{"kind":"Field","name":{"kind":"Name","value":"buttonType"}},{"kind":"Field","name":{"kind":"Name","value":"variant"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CardBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"heading"},"name":{"kind":"Name","value":"CardHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"subheading"},"name":{"kind":"Name","value":"CardSubheading"}},{"kind":"Field","alias":{"kind":"Name","value":"description"},"name":{"kind":"Name","value":"CardDescription"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"icon"},"name":{"kind":"Name","value":"CardIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"image"},"name":{"kind":"Name","value":"CardImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"link"},"name":{"kind":"Name","value":"CardButton"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonBlockPropertyData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"color"},"name":{"kind":"Name","value":"CardColor"}},{"kind":"Field","alias":{"kind":"Name","value":"layout"},"name":{"kind":"Name","value":"CardImageLayout"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OfficeLocationData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OfficeLocation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"OfficeTitle"}},{"kind":"Field","alias":{"kind":"Name","value":"street1"},"name":{"kind":"Name","value":"OfficeAddressStreet1"}},{"kind":"Field","alias":{"kind":"Name","value":"street2"},"name":{"kind":"Name","value":"OfficeAddressStreet2"}},{"kind":"Field","alias":{"kind":"Name","value":"postalcode"},"name":{"kind":"Name","value":"OfficeAddressPostalCode"}},{"kind":"Field","alias":{"kind":"Name","value":"city"},"name":{"kind":"Name","value":"OfficeAddressCity"}},{"kind":"Field","alias":{"kind":"Name","value":"country"},"name":{"kind":"Name","value":"OfficeAddressCountry"}},{"kind":"Field","alias":{"kind":"Name","value":"phone"},"name":{"kind":"Name","value":"OfficePhone"}},{"kind":"Field","alias":{"kind":"Name","value":"email"},"name":{"kind":"Name","value":"OfficeEmail"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"className"}},{"kind":"Field","name":{"kind":"Name","value":"buttonType"}},{"kind":"Field","name":{"kind":"Name","value":"variant"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Link"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NavigationMenuBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NavigationMenuBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"MenuNavigationHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"items"},"name":{"kind":"Name","value":"NavigationLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkItemData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MegaMenuGroupBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MegaMenuGroupBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"menuName"},"name":{"kind":"Name","value":"MenuMenuHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"menuLink"},"name":{"kind":"Name","value":"MegaMenuUrl"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"menuData"},"name":{"kind":"Name","value":"MegaMenuContentArea"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavigationMenuBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardBlockData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OfficeLocationData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MegaMenuGroupBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavigationMenuBlockData"}}]}}]} as unknown as DocumentNode<ArticleGroupPageDataFragment, unknown>;
export const ArticlePageDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArticlePageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ArticlePage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"metadata"},"name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"published"}}]}},{"kind":"Field","name":{"kind":"Name","value":"articleHeroImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"articleAuthors"}},{"kind":"Field","name":{"kind":"Name","value":"articleTitle"}},{"kind":"Field","name":{"kind":"Name","value":"articleBody"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReferenceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}}]} as unknown as DocumentNode<ArticlePageDataFragment, unknown>;
export const PageDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlankExperienceData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ArticleGroupPageData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ArticlePageData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArticleListElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ArticleListElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"articleListCount"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CTAElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CTAElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"text"},"name":{"kind":"Name","value":"Text"}},{"kind":"Field","alias":{"kind":"Name","value":"link"},"name":{"kind":"Name","value":"Link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeadingElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HeadingElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"headingText"}},{"kind":"Field","name":{"kind":"Name","value":"AIPrompt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReferenceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"imageLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ParagraphElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ParagraphElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"paragraph"},"name":{"kind":"Name","value":"text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TestimonialElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TestimonialElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"referenceTitle"}},{"kind":"Field","name":{"kind":"Name","value":"referenceText"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"customerName"}},{"kind":"Field","name":{"kind":"Name","value":"customerLocation"}},{"kind":"Field","name":{"kind":"Name","value":"customerImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ArticleListElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CTAElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeadingElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ParagraphElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialElementData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompositionData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"displayName"}},{"kind":"Field","alias":{"kind":"Name","value":"layoutType"},"name":{"kind":"Name","value":"nodeType"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","alias":{"kind":"Name","value":"template"},"name":{"kind":"Name","value":"displayTemplateKey"}},{"kind":"Field","alias":{"kind":"Name","value":"settings"},"name":{"kind":"Name","value":"displaySettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionStructureNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"recursive"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"depth"},"value":{"kind":"IntValue","value":"10"}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"displayName"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionElementNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"element"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ElementData"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ExperienceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IExperience"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"composition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompositionData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonBlockPropertyData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonBlockProperty"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"className"}},{"kind":"Field","name":{"kind":"Name","value":"buttonType"}},{"kind":"Field","name":{"kind":"Name","value":"variant"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CardBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"heading"},"name":{"kind":"Name","value":"CardHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"subheading"},"name":{"kind":"Name","value":"CardSubheading"}},{"kind":"Field","alias":{"kind":"Name","value":"description"},"name":{"kind":"Name","value":"CardDescription"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"icon"},"name":{"kind":"Name","value":"CardIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"image"},"name":{"kind":"Name","value":"CardImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"link"},"name":{"kind":"Name","value":"CardButton"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonBlockPropertyData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"color"},"name":{"kind":"Name","value":"CardColor"}},{"kind":"Field","alias":{"kind":"Name","value":"layout"},"name":{"kind":"Name","value":"CardImageLayout"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OfficeLocationData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OfficeLocation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"OfficeTitle"}},{"kind":"Field","alias":{"kind":"Name","value":"street1"},"name":{"kind":"Name","value":"OfficeAddressStreet1"}},{"kind":"Field","alias":{"kind":"Name","value":"street2"},"name":{"kind":"Name","value":"OfficeAddressStreet2"}},{"kind":"Field","alias":{"kind":"Name","value":"postalcode"},"name":{"kind":"Name","value":"OfficeAddressPostalCode"}},{"kind":"Field","alias":{"kind":"Name","value":"city"},"name":{"kind":"Name","value":"OfficeAddressCity"}},{"kind":"Field","alias":{"kind":"Name","value":"country"},"name":{"kind":"Name","value":"OfficeAddressCountry"}},{"kind":"Field","alias":{"kind":"Name","value":"phone"},"name":{"kind":"Name","value":"OfficePhone"}},{"kind":"Field","alias":{"kind":"Name","value":"email"},"name":{"kind":"Name","value":"OfficeEmail"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"className"}},{"kind":"Field","name":{"kind":"Name","value":"buttonType"}},{"kind":"Field","name":{"kind":"Name","value":"variant"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Link"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NavigationMenuBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NavigationMenuBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"MenuNavigationHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"items"},"name":{"kind":"Name","value":"NavigationLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkItemData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MegaMenuGroupBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MegaMenuGroupBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"menuName"},"name":{"kind":"Name","value":"MenuMenuHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"menuLink"},"name":{"kind":"Name","value":"MegaMenuUrl"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"menuData"},"name":{"kind":"Name","value":"MegaMenuContentArea"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavigationMenuBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardBlockData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OfficeLocationData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MegaMenuGroupBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavigationMenuBlockData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlankExperienceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BlankExperience"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ExperienceData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArticleGroupPageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ArticleGroupPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"articleGroupTitle"}},{"kind":"Field","name":{"kind":"Name","value":"articleGroupIntro"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"MainContent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArticlePageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ArticlePage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"metadata"},"name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"published"}}]}},{"kind":"Field","name":{"kind":"Name","value":"articleHeroImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"articleAuthors"}},{"kind":"Field","name":{"kind":"Name","value":"articleTitle"}},{"kind":"Field","name":{"kind":"Name","value":"articleBody"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}}]}}]} as unknown as DocumentNode<PageDataFragment, unknown>;
export const getContentTypeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getContentType"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"version"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locales"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"path"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"domain"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"content"},"name":{"kind":"Name","value":"_Content"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_or"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_metadata"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"version"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"version"}}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_metadata"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"url"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"hierarchical"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"path"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"base"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"domain"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"version"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"version"}}}]}}]}}]}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"types"}}]}}]}}]}}]}}]} as unknown as DocumentNode<getContentTypeQuery, getContentTypeQueryVariables>;
export const getArticleListElementItemsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getArticleListElementItems"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"count"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locales"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ArticlePage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_metadata"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"published"},"value":{"kind":"EnumValue","value":"DESC"}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"count"}}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_metadata"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"status"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"StringValue","value":"Published","block":false}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}},{"kind":"Field","name":{"kind":"Name","value":"articleTitle"}},{"kind":"Field","alias":{"kind":"Name","value":"articleMeta"},"name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"published"}},{"kind":"Field","name":{"kind":"Name","value":"lastModified"}}]}},{"kind":"Field","name":{"kind":"Name","value":"articleAuthors"}},{"kind":"Field","name":{"kind":"Name","value":"articleSummary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"articleHeroImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReferenceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}}]} as unknown as DocumentNode<getArticleListElementItemsQuery, getArticleListElementItemsQueryVariables>;
export const getBlankExperienceMetaDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getBlankExperienceMetaData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"version"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"BlankExperience"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_metadata"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"version"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"version"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"displayName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"SeoSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"metaTitle"}}]}}]}}]}}]}}]} as unknown as DocumentNode<getBlankExperienceMetaDataQuery, getBlankExperienceMetaDataQueryVariables>;
export const getArticleGroupPageItemsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getArticleGroupPageItems"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locales"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"group"},"name":{"kind":"Name","value":"ArticleGroupPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_metadata"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}}]}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"data"},"name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"children"},"name":{"kind":"Name","value":"_link"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"EnumValue","value":"ITEMS"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"listing"},"name":{"kind":"Name","value":"ArticlePage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_metadata"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"status"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"StringValue","value":"Published","block":false}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}},{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"published"}}]}},{"kind":"Field","name":{"kind":"Name","value":"articleHeroImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"articleTitle"}},{"kind":"Field","name":{"kind":"Name","value":"articleSummary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}}]}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReferenceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}}]} as unknown as DocumentNode<getArticleGroupPageItemsQuery, getArticleGroupPageItemsQueryVariables>;
export const getArticlePageMetaDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getArticlePageMetaData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"version"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"BlankExperience"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_metadata"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"version"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"version"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"displayName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"SeoSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"metaTitle"}}]}}]}}]}}]}}]} as unknown as DocumentNode<getArticlePageMetaDataQuery, getArticlePageMetaDataQueryVariables>;
export const getFooterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getFooter"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"footer"},"name":{"kind":"Name","value":"WebsiteFooter"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_metadata"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"status"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"StringValue","value":"Published","block":false}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"address"},"name":{"kind":"Name","value":"FooterMainOfficeLocation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OfficeLocationData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"firstMenu"},"name":{"kind":"Name","value":"FooterFirstLinkList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MenuContent"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"secondMenu"},"name":{"kind":"Name","value":"FooterSecondLinkList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MenuContent"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"thirdMenu"},"name":{"kind":"Name","value":"FooterThirdLinkList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MenuContent"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"logo"},"name":{"kind":"Name","value":"FooterLogo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"logoAlt"},"name":{"kind":"Name","value":"FooterLogoAltText"}},{"kind":"Field","alias":{"kind":"Name","value":"legal"},"name":{"kind":"Name","value":"FooterLegalLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkItemData"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Link"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OfficeLocationData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OfficeLocation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"OfficeTitle"}},{"kind":"Field","alias":{"kind":"Name","value":"street1"},"name":{"kind":"Name","value":"OfficeAddressStreet1"}},{"kind":"Field","alias":{"kind":"Name","value":"street2"},"name":{"kind":"Name","value":"OfficeAddressStreet2"}},{"kind":"Field","alias":{"kind":"Name","value":"postalcode"},"name":{"kind":"Name","value":"OfficeAddressPostalCode"}},{"kind":"Field","alias":{"kind":"Name","value":"city"},"name":{"kind":"Name","value":"OfficeAddressCity"}},{"kind":"Field","alias":{"kind":"Name","value":"country"},"name":{"kind":"Name","value":"OfficeAddressCountry"}},{"kind":"Field","alias":{"kind":"Name","value":"phone"},"name":{"kind":"Name","value":"OfficePhone"}},{"kind":"Field","alias":{"kind":"Name","value":"email"},"name":{"kind":"Name","value":"OfficeEmail"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuContent"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NavigationMenuBlockProperty"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"heading"},"name":{"kind":"Name","value":"MenuNavigationHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"links"},"name":{"kind":"Name","value":"NavigationLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkItemData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReferenceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}}]} as unknown as DocumentNode<getFooterQuery, getFooterQueryVariables>;
export const getHeaderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getHeader"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"menuItems"},"name":{"kind":"Name","value":"HeaderBlock"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_metadata"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"status"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"StringValue","value":"Published","block":false}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"logo"},"name":{"kind":"Name","value":"site_logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"darkLogo"},"name":{"kind":"Name","value":"site_logo_dark"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"headerNavigation"},"name":{"kind":"Name","value":"site_main_navigation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MegaMenuGroupBlockData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"utilityNavigation"},"name":{"kind":"Name","value":"site_utility_navigation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonBlockData"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Link"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NavigationMenuBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NavigationMenuBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"MenuNavigationHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"items"},"name":{"kind":"Name","value":"NavigationLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkItemData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReferenceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonBlockPropertyData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonBlockProperty"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"className"}},{"kind":"Field","name":{"kind":"Name","value":"buttonType"}},{"kind":"Field","name":{"kind":"Name","value":"variant"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CardBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"heading"},"name":{"kind":"Name","value":"CardHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"subheading"},"name":{"kind":"Name","value":"CardSubheading"}},{"kind":"Field","alias":{"kind":"Name","value":"description"},"name":{"kind":"Name","value":"CardDescription"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"icon"},"name":{"kind":"Name","value":"CardIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"image"},"name":{"kind":"Name","value":"CardImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"link"},"name":{"kind":"Name","value":"CardButton"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonBlockPropertyData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"color"},"name":{"kind":"Name","value":"CardColor"}},{"kind":"Field","alias":{"kind":"Name","value":"layout"},"name":{"kind":"Name","value":"CardImageLayout"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MegaMenuGroupBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MegaMenuGroupBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"menuName"},"name":{"kind":"Name","value":"MenuMenuHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"menuLink"},"name":{"kind":"Name","value":"MegaMenuUrl"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"menuData"},"name":{"kind":"Name","value":"MegaMenuContentArea"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavigationMenuBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardBlockData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"className"}},{"kind":"Field","name":{"kind":"Name","value":"buttonType"}},{"kind":"Field","name":{"kind":"Name","value":"variant"}}]}}]} as unknown as DocumentNode<getHeaderQuery, getHeaderQueryVariables>;
export const getDictionaryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getDictionary"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dictionary"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locales"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"getDictionary"},"name":{"kind":"Name","value":"Dictionary"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"DictionaryKey"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dictionary"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"key"},"name":{"kind":"Name","value":"DictionaryKey"}},{"kind":"Field","alias":{"kind":"Name","value":"contents"},"name":{"kind":"Name","value":"DictionaryItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"key"},"name":{"kind":"Name","value":"DictionaryItemKey"}},{"kind":"Field","alias":{"kind":"Name","value":"value"},"name":{"kind":"Name","value":"DictionaryItemValue"}}]}}]}}]}}]}}]} as unknown as DocumentNode<getDictionaryQuery, getDictionaryQueryVariables>;
export const getContentByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getContentById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"version"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locales"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"path"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"domain"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"content"},"name":{"kind":"Name","value":"_Content"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_or"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_metadata"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"version"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"version"}}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_metadata"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"url"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"hierarchical"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"path"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"base"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"domain"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"version"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"version"}}}]}}]}}]}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageData"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReferenceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonBlockPropertyData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonBlockProperty"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"className"}},{"kind":"Field","name":{"kind":"Name","value":"buttonType"}},{"kind":"Field","name":{"kind":"Name","value":"variant"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CardBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"heading"},"name":{"kind":"Name","value":"CardHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"subheading"},"name":{"kind":"Name","value":"CardSubheading"}},{"kind":"Field","alias":{"kind":"Name","value":"description"},"name":{"kind":"Name","value":"CardDescription"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"icon"},"name":{"kind":"Name","value":"CardIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"image"},"name":{"kind":"Name","value":"CardImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"link"},"name":{"kind":"Name","value":"CardButton"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonBlockPropertyData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"color"},"name":{"kind":"Name","value":"CardColor"}},{"kind":"Field","alias":{"kind":"Name","value":"layout"},"name":{"kind":"Name","value":"CardImageLayout"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OfficeLocationData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OfficeLocation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"OfficeTitle"}},{"kind":"Field","alias":{"kind":"Name","value":"street1"},"name":{"kind":"Name","value":"OfficeAddressStreet1"}},{"kind":"Field","alias":{"kind":"Name","value":"street2"},"name":{"kind":"Name","value":"OfficeAddressStreet2"}},{"kind":"Field","alias":{"kind":"Name","value":"postalcode"},"name":{"kind":"Name","value":"OfficeAddressPostalCode"}},{"kind":"Field","alias":{"kind":"Name","value":"city"},"name":{"kind":"Name","value":"OfficeAddressCity"}},{"kind":"Field","alias":{"kind":"Name","value":"country"},"name":{"kind":"Name","value":"OfficeAddressCountry"}},{"kind":"Field","alias":{"kind":"Name","value":"phone"},"name":{"kind":"Name","value":"OfficePhone"}},{"kind":"Field","alias":{"kind":"Name","value":"email"},"name":{"kind":"Name","value":"OfficeEmail"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"className"}},{"kind":"Field","name":{"kind":"Name","value":"buttonType"}},{"kind":"Field","name":{"kind":"Name","value":"variant"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Link"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NavigationMenuBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NavigationMenuBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"MenuNavigationHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"items"},"name":{"kind":"Name","value":"NavigationLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkItemData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MegaMenuGroupBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MegaMenuGroupBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"menuName"},"name":{"kind":"Name","value":"MenuMenuHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"menuLink"},"name":{"kind":"Name","value":"MegaMenuUrl"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"menuData"},"name":{"kind":"Name","value":"MegaMenuContentArea"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavigationMenuBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardBlockData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArticleListElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ArticleListElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"articleListCount"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CTAElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CTAElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"text"},"name":{"kind":"Name","value":"Text"}},{"kind":"Field","alias":{"kind":"Name","value":"link"},"name":{"kind":"Name","value":"Link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeadingElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HeadingElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"headingText"}},{"kind":"Field","name":{"kind":"Name","value":"AIPrompt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"imageLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ParagraphElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ParagraphElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"paragraph"},"name":{"kind":"Name","value":"text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TestimonialElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TestimonialElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"referenceTitle"}},{"kind":"Field","name":{"kind":"Name","value":"referenceText"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"customerName"}},{"kind":"Field","name":{"kind":"Name","value":"customerLocation"}},{"kind":"Field","name":{"kind":"Name","value":"customerImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ArticleListElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CTAElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeadingElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ParagraphElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialElementData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompositionData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"displayName"}},{"kind":"Field","alias":{"kind":"Name","value":"layoutType"},"name":{"kind":"Name","value":"nodeType"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","alias":{"kind":"Name","value":"template"},"name":{"kind":"Name","value":"displayTemplateKey"}},{"kind":"Field","alias":{"kind":"Name","value":"settings"},"name":{"kind":"Name","value":"displaySettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionStructureNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"recursive"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"depth"},"value":{"kind":"IntValue","value":"10"}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"displayName"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionElementNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"element"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ElementData"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ExperienceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IExperience"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"composition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompositionData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlankExperienceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BlankExperience"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ExperienceData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OfficeLocationData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MegaMenuGroupBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavigationMenuBlockData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArticleGroupPageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ArticleGroupPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"articleGroupTitle"}},{"kind":"Field","name":{"kind":"Name","value":"articleGroupIntro"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"MainContent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArticlePageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ArticlePage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"metadata"},"name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"published"}}]}},{"kind":"Field","name":{"kind":"Name","value":"articleHeroImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"articleAuthors"}},{"kind":"Field","name":{"kind":"Name","value":"articleTitle"}},{"kind":"Field","name":{"kind":"Name","value":"articleBody"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlankExperienceData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ArticleGroupPageData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ArticlePageData"}}]}}]} as unknown as DocumentNode<getContentByIdQuery, getContentByIdQueryVariables>;
export const getContentByPathDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getContentByPath"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"path"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"version"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locales"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"domain"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"content"},"name":{"kind":"Name","value":"_Content"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_metadata"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"url"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"default"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"path"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"base"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"domain"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"version"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"version"}}}]}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageData"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArticleListElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ArticleListElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"articleListCount"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CTAElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CTAElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"text"},"name":{"kind":"Name","value":"Text"}},{"kind":"Field","alias":{"kind":"Name","value":"link"},"name":{"kind":"Name","value":"Link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeadingElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HeadingElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"headingText"}},{"kind":"Field","name":{"kind":"Name","value":"AIPrompt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReferenceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"imageLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ParagraphElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ParagraphElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"paragraph"},"name":{"kind":"Name","value":"text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TestimonialElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TestimonialElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"referenceTitle"}},{"kind":"Field","name":{"kind":"Name","value":"referenceText"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"customerName"}},{"kind":"Field","name":{"kind":"Name","value":"customerLocation"}},{"kind":"Field","name":{"kind":"Name","value":"customerImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ArticleListElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CTAElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeadingElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ParagraphElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialElementData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompositionData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"displayName"}},{"kind":"Field","alias":{"kind":"Name","value":"layoutType"},"name":{"kind":"Name","value":"nodeType"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","alias":{"kind":"Name","value":"template"},"name":{"kind":"Name","value":"displayTemplateKey"}},{"kind":"Field","alias":{"kind":"Name","value":"settings"},"name":{"kind":"Name","value":"displaySettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionStructureNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"recursive"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"depth"},"value":{"kind":"IntValue","value":"10"}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"displayName"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionElementNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"element"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ElementData"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ExperienceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IExperience"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"composition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompositionData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlankExperienceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BlankExperience"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ExperienceData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonBlockPropertyData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonBlockProperty"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"className"}},{"kind":"Field","name":{"kind":"Name","value":"buttonType"}},{"kind":"Field","name":{"kind":"Name","value":"variant"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CardBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"heading"},"name":{"kind":"Name","value":"CardHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"subheading"},"name":{"kind":"Name","value":"CardSubheading"}},{"kind":"Field","alias":{"kind":"Name","value":"description"},"name":{"kind":"Name","value":"CardDescription"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"icon"},"name":{"kind":"Name","value":"CardIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"image"},"name":{"kind":"Name","value":"CardImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"link"},"name":{"kind":"Name","value":"CardButton"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonBlockPropertyData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"color"},"name":{"kind":"Name","value":"CardColor"}},{"kind":"Field","alias":{"kind":"Name","value":"layout"},"name":{"kind":"Name","value":"CardImageLayout"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OfficeLocationData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OfficeLocation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"OfficeTitle"}},{"kind":"Field","alias":{"kind":"Name","value":"street1"},"name":{"kind":"Name","value":"OfficeAddressStreet1"}},{"kind":"Field","alias":{"kind":"Name","value":"street2"},"name":{"kind":"Name","value":"OfficeAddressStreet2"}},{"kind":"Field","alias":{"kind":"Name","value":"postalcode"},"name":{"kind":"Name","value":"OfficeAddressPostalCode"}},{"kind":"Field","alias":{"kind":"Name","value":"city"},"name":{"kind":"Name","value":"OfficeAddressCity"}},{"kind":"Field","alias":{"kind":"Name","value":"country"},"name":{"kind":"Name","value":"OfficeAddressCountry"}},{"kind":"Field","alias":{"kind":"Name","value":"phone"},"name":{"kind":"Name","value":"OfficePhone"}},{"kind":"Field","alias":{"kind":"Name","value":"email"},"name":{"kind":"Name","value":"OfficeEmail"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"className"}},{"kind":"Field","name":{"kind":"Name","value":"buttonType"}},{"kind":"Field","name":{"kind":"Name","value":"variant"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Link"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NavigationMenuBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NavigationMenuBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"MenuNavigationHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"items"},"name":{"kind":"Name","value":"NavigationLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkItemData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MegaMenuGroupBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MegaMenuGroupBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"menuName"},"name":{"kind":"Name","value":"MenuMenuHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"menuLink"},"name":{"kind":"Name","value":"MegaMenuUrl"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"menuData"},"name":{"kind":"Name","value":"MegaMenuContentArea"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavigationMenuBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardBlockData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OfficeLocationData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MegaMenuGroupBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavigationMenuBlockData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArticleGroupPageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ArticleGroupPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"articleGroupTitle"}},{"kind":"Field","name":{"kind":"Name","value":"articleGroupIntro"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"MainContent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArticlePageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ArticlePage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"metadata"},"name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"published"}}]}},{"kind":"Field","name":{"kind":"Name","value":"articleHeroImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"articleAuthors"}},{"kind":"Field","name":{"kind":"Name","value":"articleTitle"}},{"kind":"Field","name":{"kind":"Name","value":"articleBody"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlankExperienceData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ArticleGroupPageData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ArticlePageData"}}]}}]} as unknown as DocumentNode<getContentByPathQuery, getContentByPathQueryVariables>;